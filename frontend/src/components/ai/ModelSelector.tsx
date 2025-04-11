'use client';

import { useState, useEffect } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AIModel, availableModels } from './types';
import { useAppDispatch } from '@/redux/hooks';
import { selectedAiListAction } from '@/redux/features/selectedAiListSlice';

const Container = styled(Box)({
  display: 'flex',
  gap: '2rem',
  padding: '2rem',
  minHeight: '500px',
});

const ModelList = styled(Box)({
  flex: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '1rem',
  padding: '1rem',
  background: '#f5f5f5',
  borderRadius: '8px',
});

const ModelCard = styled(Paper)({
  padding: '1rem',
  background: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  cursor: 'grab',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
  '&:active': {
    cursor: 'grabbing',
  },
  maxHeight: 195.5,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-word',
});

interface DropZoneProps {
  isDragging: boolean;
}

const DropZone = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDragging',
})<DropZoneProps>(({ isDragging }) => ({
  flex: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '1rem',
  padding: '1rem',
  background: isDragging ? '#e3f2fd' : '#f5f5f5',
  border: `2px dashed ${isDragging ? '#2196f3' : '#ccc'}`,
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  minWidth: '200px',
}));

const ModelIcon = styled(Typography)({
  fontSize: '2rem',
  marginBottom: '0.5rem',
});

const ModelName = styled(Typography)({
  margin: '0.5rem 0',
  fontSize: '1.2rem',
});

export default function ModelSelector() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showSelectedModel, setShowSelectedModel] = useState<AIModel[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(selectedAiListAction.SELECTED_AI_LIST_REQUEST());
    dispatch(selectedAiListAction.SELECTED_AI_LIST_SUCCESS(showSelectedModel));
  }, [dispatch, showSelectedModel]);

  const handleDragStart = (e: React.DragEvent, model: AIModel) => {
    setIsDragging(true);
    setSelectedModel(model.id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    const filteredModels = availableModels.filter(
      (model) => model?.id === selectedModel
    );
    setShowSelectedModel((selectedAIList) => {
      return selectedAIList.some((model) => model.id === filteredModels[0]?.id)
        ? selectedAIList
        : [...selectedAIList, filteredModels[0]];
    });
    e.preventDefault();
    setIsDragging(false);
  };

  const handleModelMinus = (e: React.DragEvent, model: AIModel) => {
    setShowSelectedModel((selectedAIList) => {
      return selectedAIList.filter((m) => m.id !== model.id);
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <ModelList>
        {availableModels.map((model) => (
          <ModelCard
            key={model.id}
            draggable
            onDragEnd={handleDragEnd}
            onMouseDown={(e: never) => handleDragStart(e, model)}
          >
            <ModelIcon>{model.icon}</ModelIcon>
            <ModelName>{model.name}</ModelName>
            {/* <ModelDescription>{model.description}</ModelDescription> */}
          </ModelCard>
        ))}
      </ModelList>
      <DropZone
        isDragging={isDragging}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {showSelectedModel.length > 0 ? (
          showSelectedModel.map((selectedModel) => (
            <ModelCard
              key={selectedModel.id}
              onMouseDown={(e: never) => handleModelMinus(e, selectedModel)}
            >
              <ModelIcon>{selectedModel.icon}</ModelIcon>
              <ModelName>{selectedModel.name}</ModelName>
              {/* <ModelDescription>{selectedModel.description}</ModelDescription> */}
            </ModelCard>
          ))
        ) : (
          <p>AI 모델을 여기에 드래그하세요</p>
        )}
      </DropZone>
    </Container>
  );
}

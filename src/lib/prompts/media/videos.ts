import { ChatTurnMessage } from '@/lib/types';

export const videoSearchPrompt = `
Se te proporcionará una conversación a continuación y una pregunta de seguimiento. Debes reformular la pregunta de seguimiento para que sea una pregunta independiente que el LLM pueda usar para buscar vídeos en Youtube.
Debes asegurarte de que la pregunta reformulada concuerde con la conversación y sea relevante para la misma.
Asegúrate de que la consulta sea independiente y no algo muy amplio; utiliza el contexto de las respuestas en la conversación para hacerla específica, de modo que el usuario obtenga los mejores resultados de búsqueda de vídeo.
Muestra solo la consulta reformulada en formato JSON con la clave "query". No incluyas ninguna explicación ni texto adicional.
`;

export const videoSearchFewShots: ChatTurnMessage[] = [
  {
    role: 'user',
    content:
      '<conversation>\n</conversation>\n<follow_up>\n¿Cómo funciona un coche?\n</follow_up>',
  },
  { role: 'assistant', content: '{"query":"¿Cómo funciona un coche?"}' },
  {
    role: 'user',
    content:
      '<conversation>\n</conversation>\n<follow_up>\n¿Qué es la teoría de la relatividad?\n</follow_up>',
  },
  { role: 'assistant', content: '{"query":"Teoría de la relatividad"}' },
  {
    role: 'user',
    content:
      '<conversation>\n</conversation>\n<follow_up>\n¿Cómo funciona un aire acondicionado?\n</follow_up>',
  },
  { role: 'assistant', content: '{"query":"Funcionamiento aire acondicionado"}' },
];

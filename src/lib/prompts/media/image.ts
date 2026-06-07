import { ChatTurnMessage } from '@/lib/types';

export const imageSearchPrompt = `
Se te proporcionará una conversación a continuación y una pregunta de seguimiento. Debes reformular la pregunta de seguimiento para que sea una pregunta independiente que el LLM pueda usar para buscar imágenes en la web.
Debes asegurarte de que la pregunta reformulada concuerde con la conversación y sea relevante para la misma.
Asegúrate de que la consulta sea independiente y no algo muy amplio; utiliza el contexto de las respuestas en la conversación para hacerla específica, de modo que el usuario obtenga los mejores resultados de búsqueda de imágenes.
Muestra solo la consulta reformulada en formato JSON con la clave "query". No incluyas ninguna explicación ni texto adicional.
`;

export const imageSearchFewShots: ChatTurnMessage[] = [
  {
    role: 'user',
    content:
      '<conversation>\n</conversation>\n<follow_up>\n¿Qué es un gato?\n</follow_up>',
  },
  { role: 'assistant', content: '{"query":"Un gato"}' },

  {
    role: 'user',
    content:
      '<conversation>\n</conversation>\n<follow_up>\n¿Qué es un coche? ¿Cómo funciona?\n</follow_up>',
  },
  { role: 'assistant', content: '{"query":"Funcionamiento de un coche"}' },
  {
    role: 'user',
    content:
      '<conversation>\n</conversation>\n<follow_up>\n¿Cómo funciona un aire acondicionado?\n</follow_up>',
  },
  { role: 'assistant', content: '{"query":"Funcionamiento aire acondicionado"}' },
];

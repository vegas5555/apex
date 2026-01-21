import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const streamConsultationResponse = async (
  history: { role: string; parts: { text: string }[] }[],
  userMessage: string
) => {
  // Convert history format to what @google/genai expects
  const formattedHistory = history.map(h => ({
    role: h.role,
    parts: h.parts
  }));

  const model = 'gemini-3-flash-preview';
  
  const chat = ai.chats.create({
    model: model,
    history: formattedHistory,
    config: {
      systemInstruction: `Tu es "ApexBot", un consultant technique expert pour la société Apex Installations.
      Ton objectif est d'aider des boulangers, pâtissiers et restaurateurs à planifier leurs installations ou leur maintenance.
      
      Domaines d'expertise :
      1. Matériel de Boulangerie (Fours à sole, Rotatifs, Pétrins).
      2. Froid Commercial (Chambres de pousse, Surgélation).
      3. Maintenance (Dépannage, Contrats d'entretien).
      
      Comportement :
      - Tu parles UNIQUEMENT en français.
      - Sois professionnel, concis et serviable.
      - Pose des questions techniques pertinentes (surface, puissance électrique, type de production).
      - Si on te demande un prix, donne une fourchette très large et insiste sur la nécessité d'une visite technique pour un devis précis.
      - Mets en avant la sécurité et les normes d'hygiène.
      - Réponses courtes (max 150 mots).
      `,
    }
  });

  const result = await chat.sendMessageStream({ message: userMessage });
  return result;
};
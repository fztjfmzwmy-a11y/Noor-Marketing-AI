export type ResearchRequest = {
  topic: string;
  target: string;
  market: string;
  channels: string[];
};

export type ResearchResult = {
  topic: string;
  findings: string[];
  opportunities: string[];
  risks: string[];
  sources: string[];
};

export function createResearchBrief(
  request: ResearchRequest,
): ResearchResult {
  return {
    topic: request.topic,
    findings: [
      `Analyser le marché cible : ${request.market}.`,
      `Identifier les besoins du public : ${request.target}.`,
      `Étudier les tendances liées à : ${request.topic}.`,
    ],
    opportunities: [
      "Identifier les opportunités de contenu et d'acquisition.",
      "Repérer les canaux marketing les plus pertinents.",
    ],
    risks: [
      "Vérifier les informations avant toute décision marketing.",
      "Éviter les affirmations non vérifiées.",
    ],
    sources: [],
  };
}

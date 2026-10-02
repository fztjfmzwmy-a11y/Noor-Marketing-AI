export type MarketingMission = {
  objective: string;
  target: string;
  channels: string[];
  constraints: string[];
};

export type MarketingTask = {
  id: string;
  agent: "research" | "content";
  action: string;
  priority: "high" | "medium" | "low";
};

export type DirectorPlan = {
  mission: MarketingMission;
  tasks: MarketingTask[];
  nextAction: string;
};

export function createMarketingPlan(
  mission: MarketingMission,
): DirectorPlan {
  return {
    mission,
    tasks: [
      {
        id: "research-001",
        agent: "research",
        action:
          "Analyser le marché, les utilisateurs, les concurrents et les opportunités marketing de Noor.",
        priority: "high",
      },
      {
        id: "content-001",
        agent: "content",
        action:
          "Préparer des idées de contenus marketing fondées sur les résultats de la recherche.",
        priority: "high",
      },
    ],
    nextAction:
      "Analyser les résultats de recherche avant de proposer la prochaine action marketing.",
  };
}

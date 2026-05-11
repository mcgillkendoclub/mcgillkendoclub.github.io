export interface TournamentResult {
    tournamentName: string;
    date: string;
    location: string;
    results: CategoryResult[];
}

export interface CategoryResult {
    category: string;
    competitors: CompetitorResult[];
}
export interface CompetitorResult {
    competitorName: string;
    result: number | string;
}
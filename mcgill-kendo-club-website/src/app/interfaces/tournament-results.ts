export interface TournamentResult {
    tournamentName: string;
    date: string;
    location: string;
    results: CompetitorResult[];
}

export interface CompetitorResult {
    competitorName: string;
    category: string;
    result: string;
}
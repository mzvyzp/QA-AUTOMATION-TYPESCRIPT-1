import { VotesDto } from 'src/models/votes.dto';

export class VotesService {
    private _headers = {
        'x-api-key': this._token,
        accept: 'application/json'
    };

    public constructor(private _baseUrl: string, private _token: string) {}

    public async getMyVotes(): Promise<VotesDto[]> {
        const response = await fetch(`${this._baseUrl}/votes`, {
            headers: this._headers
        });

        return await response.json();
    }
    public async getVotesByUserId(userId: string): Promise<VotesDto[]> {
        const response = await fetch(`${this._baseUrl}/votes?sub_id=${userId}`, {
            headers: this._headers
        });

        return await response.json();
    }
}

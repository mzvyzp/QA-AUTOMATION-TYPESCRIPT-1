import { FavouritesDto } from 'src/models/favourites.dto';
//import { ImageDto } from '../models/image.dto';

export class FavouritesService {
    private _headers = {
        'x-api-key': this._token,
        accept: 'application/json'
    };

    public constructor(private _baseUrl: string, private _token: string) {}

    public async getMyFavourites(): Promise<FavouritesDto[]> {
        const response = await fetch(`${this._baseUrl}/favourites`, {
            headers: this._headers
        });

        return await response.json();
    }

    /* public async getImageBreads(imageId: string): Promise<BreedDto[]> {
        const response = await fetch(`${this._baseUrl}/images/${imageId}/breads`, {
            headers: this._headers
        });

        return await response.json();
    } */
}

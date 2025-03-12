import { MatchersV3, PactV3, Verifier } from '@pact-foundation/pact';
import { FavouritesService } from '../src/services/favourites.service';
import { FavouritesDto } from '../src/models/favourites.dto';
import { expect } from 'chai';
import * as path from 'path';

describe('Pact V3 Favourites service contract tests', () => {
    let favouritesService: FavouritesService;
    const xApiKey = 'live_QDxuctIXG6s8EuqfwSDmGUrc4jRB0CgirWSPVhiIIOFpd2esZ32S3kSk1NO338T8';

    const provider = new PactV3({
        consumer: 'favourites-consumer-v3',
        provider: 'favourites-provider-v3'
    });

    const favouritesResponseExample: Partial<FavouritesDto[]> = [
        {
            id: 232519508,
            user_id: 'sbnqf9',
            image_id: '41xv9-YC2',
            sub_id: 'ValiriaViCoonya',
            created_at: '2025-03-09T22:04:45.000Z',
            image: []
        } as unknown as FavouritesDto
    ];

    const expectedBody = MatchersV3.like(favouritesResponseExample);

    describe('Consumer tests using Pact V3', () => {
        it('favourites service return expected response', () => {
            provider
                .given('Favorite image exists')
                .uponReceiving('A request to get favourite images')
                .withRequest({
                    method: 'GET',
                    path: '/favourites',
                    headers: {
                        accept: 'application/json',
                        'x-api-key': xApiKey
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: expectedBody
                });

            return provider.executeTest(async (mockFavouritesService) => {
                favouritesService = new FavouritesService(
                    mockFavouritesService.url,
                    xApiKey
                );

                const favourites = await favouritesService.getMyFavourites();
                const filteredFavour = favourites.find((favourite) => favourite.id === favouritesResponseExample[0]?.id) as FavouritesDto;

                expect(filteredFavour).to.contain.keys(
                    'id',
                    'user_id',
                    'image_id',
                    'sub_id',
                    'created_at',
                    'image'
                );
                expect(filteredFavour.id).to.be.a('number');
                expect(filteredFavour.user_id).to.be.a('string');
                expect(filteredFavour.image_id).to.be.a('string');
                expect(filteredFavour.sub_id).to.be.a('string');
                expect(filteredFavour.created_at).to.be.a('string');
                expect(filteredFavour.image).to.be.an('array');
            });
        });
    });

    describe('Pact V3 verification', () => {
        it('verify provider', () => {
            return new Verifier({
                providerBaseUrl: 'https://api.thecatapi.com/v1',
                pactUrls: [path.resolve(process.cwd(), './pacts/favourites-provider-v3.json')]
            })
                .verifyProvider()
                .then(() => {
                    console.log('Pact Verification Complete!');
                });
        });
    });
});

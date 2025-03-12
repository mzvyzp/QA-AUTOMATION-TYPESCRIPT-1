import { MatchersV3, PactV3, Verifier } from '@pact-foundation/pact';
import { VotesService } from '../src/services/votes.service';
import { VotesDto } from '../src/models/votes.dto';
import { expect } from 'chai';
import * as path from 'path';

describe('Pact V3 Votes service contract tests', () => {
    let votesService: VotesService;
    const xApiKey = 'live_QDxuctIXG6s8EuqfwSDmGUrc4jRB0CgirWSPVhiIIOFpd2esZ32S3kSk1NO338T8';

    const provider = new PactV3({
        consumer: 'votes-consumer-v3',
        provider: 'votes-provider-v3'
    });

    const votesResponseExample: Partial<VotesDto[]> = [
        {
            id: 1257272,
            image_id: '41xv9-YC2',
            sub_id: 'sbnqf9',
            created_at: '2025-03-11T20:36:35.000Z',
            value: 1,
            country_code: 'GR',
            image: []
        } as unknown as VotesDto
    ];

    const expectedBody = MatchersV3.like(votesResponseExample);

    describe('Consumer tests using Pact V3', () => {
        it('votes service return expected response', () => {
            provider
                .given('votes exist')
                .uponReceiving('A request to get votes')
                .withRequest({
                    method: 'GET',
                    path: '/votes',
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

            return provider.executeTest(async (mockVotesService) => {
                votesService = new VotesService(
                    mockVotesService.url,
                    xApiKey
                );

                const votes = await votesService.getMyVotes();
                const filteredVotes = votes.find((vote) => vote.id === votesResponseExample[0]?.id) as VotesDto;

                expect(filteredVotes).to.contain.keys(
                    'id',
                    'image_id',
                    'sub_id',
                    'created_at',
                    'value',
                    'country_code',
                    'image'
                );
                expect(filteredVotes.id).to.be.a('number');
                expect(filteredVotes.image_id).to.be.a('string');
                expect(filteredVotes.sub_id).to.be.a('string');
                expect(filteredVotes.created_at).to.be.a('string');
                expect(filteredVotes.value).to.be.a('number');
                expect(filteredVotes.country_code).to.be.a('string');
                expect(filteredVotes.image).to.be.an('array');
            });
            it('votes service return expected response by user id', () => {
                provider
                    .given('votes exist')
                    .uponReceiving('A request to get votes by user id')
                    .withRequest({
                        method: 'GET',
                        path: '/votes',
                        query: { sub_id: 'sbnqf9' },
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
                return provider.executeTest(async (mockVotesService) => {
                    votesService = new VotesService(
                        mockVotesService.url,
                        xApiKey
                    );
                    const votes = await votesService.getVotesByUserId('sbnqf9');
                    const filteredVotes = votes.find((vote) => vote.id === votesResponseExample[0]?.id) as VotesDto;
                    expect(filteredVotes).to.contain.keys(
                        'id',
                        'image_id',
                        'sub_id',
                        'created_at',
                        'value',
                        'country_code',
                        'image'
                    );
                    expect(filteredVotes.id).to.be.a('number');
                    expect(filteredVotes.image_id).to.be.a('string');
                    expect(filteredVotes.sub_id).to.be.a('string');
                    expect(filteredVotes.created_at).to.be.a('string');
                    expect(filteredVotes.value).to.be.a('number');
                    expect(filteredVotes.country_code).to.be.a('string');
                    expect(filteredVotes.image).to.be.an('array');
                });

            });

        });
        describe('Pact V3 verification', () => {
            it('verify provider', () => {
                return new Verifier({
                    providerBaseUrl: 'https://api.thecatapi.com/v1',
                    pactUrls: [path.resolve(process.cwd(), './pacts/votes-provider-v3.json')]
                })
                    .verifyProvider()
                    .then(() => {
                        console.log('Pact Verification Complete!');
                    });
            });
        });
    });
});

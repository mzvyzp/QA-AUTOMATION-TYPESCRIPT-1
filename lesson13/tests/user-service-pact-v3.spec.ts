import { expect } from 'chai';
import * as path from 'path';
import { PactV3, MatchersV3, Verifier } from '@pact-foundation/pact';
import { UserService } from 'src/services/user.service';
import { UserDto } from '../src/models/user.dto';
const { like } = MatchersV3;

describe('PactV3 PetsStore consumer tests', () => {
    let userService: UserService;

    const provider = new PactV3({
        consumer: 'User-Web-v3',
        provider: 'User-API-v3'
    });

    const userExample: UserDto = {
        id: 3,
        username: 'test3',
        firstName: 'Bart',
        lastName: 'Simpson',
        email: 'b_simpson@test.me',
        password: 'psswrd',
        phone: '999334449',
        userStatus: 1
    };

    const EXPECTED_BODY = like(userExample);
    const POST_RESPONSE_BODY = like({
        code: 200,
        type: 'unknown',
        message: '3'
    });

    describe('create and get user', () => {
        it('returns created user', () => {
            provider
                .given('user interaction')
                .uponReceiving('create user')
                .withRequest({
                    method: 'POST',
                    path: '/v2/user',
                    body: userExample,
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: POST_RESPONSE_BODY
                })
                .uponReceiving('get user')
                .withRequest({
                    method: 'GET',
                    path: '/v2/user/test3'
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: EXPECTED_BODY
                });

            return provider.executeTest(async (mockServer) => {
                // Act
                userService = new UserService(mockServer.url);
                const responsePost = await userService.createUser(userExample);
                const response = await userService.getUser('test3');

                // Assert
                expect(responsePost.data).to.include.keys('code', 'type', 'message');
                expect(response.data).to.deep.eq(userExample);
            });
        });
    });
});

describe('PactV3 User Provider Verification', () => {
    it('validates the expectations of Matching Service', () => {
        return new Verifier({
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), './pacts/User-Web-v3-User-API-v3.json')]
        })
            .verifyProvider();
    });
});

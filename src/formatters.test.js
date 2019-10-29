import { formatId, formatTitle, formatBody, formatUserId, formatName } from './formatters';

describe('formattersPostList', () => {
    describe('formatId', () => {
        describe('the post to have a unique id', () => {
            it('returns a post with a unique id', () => {
                const id = 99;
                expect(formatId(id)).toBe(99);
            })
        })
    })

    describe('formatTitle', () => {
        describe('the post to have a title', () => {
            it('returns a post with a title', () => {
                const title = "at nam consequatur ea labore ea harum";
                expect(formatTitle(title)).toBe("at nam consequatur ea labore ea harum");
            })
        })
    })

    describe('fromatUserId', () => {
        describe('the post to have a userId', () => {
            it('returns a post with a userId', () => {
                const userId = 10;
                expect(formatUserId(userId)).toBe(10);
            })
        })
    })

    describe('formatBody', () => {
        describe('the post to have a body', () => {
            it('returns a post with a body', () => {
                const body = "aut et excepturi dicta laudantium sint rerum nihil…icia et similique libero et↵commodi voluptate qui";
                expect(formatBody(body)).toBe("aut et excepturi dicta laudantium sint rerum nihil…icia et similique libero et↵commodi voluptate qui")
            })
        })
    })
})

describe('formattersUserHeader', () => {
    describe('formatName', () => {
        describe('the user to have a name', () => {
            it('returns a user with a name', () => {
                const name = "Leanne Graham";
                expect(formatName(name)).toBe("Leanne Graham")
            })
        })
    })
})
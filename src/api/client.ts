import { createClient } from 'microcms-js-sdk'
import { GetRequest } from 'microcms-js-sdk/dist/cjs/types'

//  micro ms データベース連携用
export const client: {
    get: <T>({ endpoint, contentId, queries, useGlobalDraftKey }: GetRequest) => Promise<T>;
} = createClient({
    serviceDomain: 'yani-review',
    apiKey: "20a20210-8e96-4504-96e7-943e7881d361"
})
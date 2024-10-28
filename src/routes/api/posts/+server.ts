import { json, type RequestHandler } from `@sveltejs/kit`

export const GET; RequestHandler = async () => {
    // get posts from database

    const posts = {
        slug: 'sveltekit',
        content: `
            <h1>Sveltekit</h1>
            <p>This data came from the ServiceWorkerRegistration.</p>
        `,
    }
    return json(posts)
}
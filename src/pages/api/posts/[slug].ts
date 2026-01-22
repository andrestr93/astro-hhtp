// @prefix a-GET
// @description 

import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {


    const { slug } = params;


    const post = await getEntry('blog', slug as any)

    if (!post) {

        return new Response(JSON.stringify({ msg: `Post ${slug} not found` }), {

            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        })


    }

    return new Response(JSON.stringify(post), {

        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })

}




export const POST: APIRoute = async ({ params, request }) => {

    const body = await request.json();

    console.log(body)
    return new Response(JSON.stringify(body), {

        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }

    })

}



export const PUT: APIRoute = async ({ params, request }) => {

    const body = await request.json();

    console.log(body)
    return new Response(JSON.stringify(body), {

        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }

    })

}




import { Hono } from 'npm:hono'
import { cors } from 'npm:hono/cors'
import { logger } from 'npm:hono/logger'
import { createClient } from 'npm:@supabase/supabase-js@2'
import * as kv from './kv_store.tsx'

const app = new Hono()

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))

app.use('*', logger(console.log))

// Health check endpoint
app.get('/make-server-af5925d2/health', (c) => {
  return c.json({ status: 'ok', message: 'AI Sales Coach server running' })
})

// Submit waitlist signup
app.post('/make-server-af5925d2/waitlist', async (c) => {
  try {
    const body = await c.req.json()
    const { email, name, problem, pricing } = body

    if (!email) {
      return c.json({ error: 'Email is required' }, 400)
    }

    // Create a unique ID for this signup
    const signupId = `signup_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    // Store the signup data
    const signupData = {
      id: signupId,
      email,
      name: name || '',
      problem: problem || '',
      pricing: pricing || '',
      timestamp: new Date().toISOString(),
      confirmed: false
    }

    await kv.set(`waitlist:${signupId}`, signupData)
    
    // Also store by email for quick lookup
    await kv.set(`email:${email}`, signupId)

    console.log(`New waitlist signup: ${email}`)

    return c.json({ 
      success: true, 
      message: 'Successfully added to waitlist',
      id: signupId 
    })

  } catch (error) {
    console.log(`Error processing waitlist signup: ${error}`)
    return c.json({ 
      error: 'Failed to process signup', 
      details: error.message 
    }, 500)
  }
})

// Get waitlist count (optional endpoint for admin use)
app.get('/make-server-af5925d2/waitlist/count', async (c) => {
  try {
    const signups = await kv.getByPrefix('waitlist:')
    return c.json({ count: signups.length })
  } catch (error) {
    console.log(`Error getting waitlist count: ${error}`)
    return c.json({ error: 'Failed to get count' }, 500)
  }
})

Deno.serve(app.fetch)
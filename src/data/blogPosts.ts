export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  preview: string;        // used in Blog cards
  content: string;        // markdown
  image_url: string;      // cloudinary image link
  published_date: string; // "YYYY-MM-DD"
}

export const blogPosts: BlogPost[] = [
  {
    id: "from-posters-to-products",
    title:
      "From Posters to Products: The Night I Stopped Designing Screens and Started Designing Systems",
    slug: "from-posters-to-products",
    preview:
      "A moment came when “clean design” wasn’t enough—I wanted my work to help someone. This is the story of the night I stopped polishing screens and started building systems.",
    image_url:
      "https://res.cloudinary.com/drfdoiwg1/image/upload/v1763530660/samples/food/dessert.jpg",
    published_date: "2025-06-30",
    content: `
# From Posters to Products

There was a season when my entire world fit inside a rectangle.

A poster. A banner. A flyer.  
If it looked clean, if the colors behaved, if the text aligned like a choir—then it felt like success.

But one night, I finished a design that everyone liked… and still felt empty.

Not because the design was bad.  
It was good—the kind of “good” that gets compliments.  
The kind of “good” that makes you proud for five minutes.

Then the question came:

> “So… how does this help someone?”

I didn’t have an answer that satisfied me.

---

## The moment it changed

That night, I opened my laptop again—not to adjust kerning or pick a new font…  
but to figure out *how things work behind the scenes*.

I started with the simplest thing:

\`If a user clicks a button, what happens next?\`

At first it was confusing.  
I wrote code that didn’t run.  
Fixed one bug, created three more.

But I noticed something:

Every time I solved a bug, I felt a different kind of happiness—  
not the “nice design” happiness…

A *deeper* one.

Like I had unlocked a door.

---

## Design taught me to see

Design made me sensitive to the small things:

- spacing that breathes  
- color that guides  
- typography that speaks without shouting  
- layouts that feel obvious  

But development taught me something else:

How to make those feelings **repeatable**.

How to turn one good screen into a full experience.  
How to build a system where “beautiful” is not a lucky moment—but the default.

---

## The struggle nobody posts

People post wins.  
But the real journey is the quiet grind:

- Learning routes and wondering why your page is blank  
- Fixing a broken \`<img>\` tag at 2AM  
- Building components that work… then rewriting them because you learned a better way  
- Realizing “data” isn’t magic — it’s structure  

I remember the first time I created a card list from a local array.  
No backend. No database. Just clean data and clean UI.

It felt like building a small universe with rules.

---

## The lesson I keep

If you’re in that “in-between” stage—  
where you’re not just a designer anymore, but not fully confident as a developer—

I want you to know this:

You’re not lost.

You’re expanding.

You’re learning how to carry beauty into function.  
How to build things that not only look good… but *work*.

---

## What I’m building now

Today, when I design, I already think like a builder:

- Where does the image come from?  
- What happens when data is missing?  
- What if the user is offline?  
- How do we store likes without a backend?  
- How do we make the UI still feel premium?  

That’s the difference between decoration and product.

And that’s the journey I’m on.

---

If you’re reading this and you’re also switching gears… keep going.

Your future work will not just be seen.  
It will be *used*.

> **Design the feeling. Build the reality.**
`,
  },
   // ✅ Blog 2
  {
    id: "the-day-my-ui-started-feeling-expensive",
    title: "The Day My UI Started Feeling Expensive",
    slug: "the-day-my-ui-started-feeling-expensive",
    preview:
      "The secret wasn’t fancy animations. It was spacing, contrast, and a few design rules I started following religiously.",
    image_url:
      "https://res.cloudinary.com/drfdoiwg1/image/upload/v1763530662/samples/sheep.jpg",
    published_date: "2025-07-18",
    content: `
# The Day My UI Started Feeling Expensive

For a long time, my UI had a problem.

It wasn’t ugly.  
It wasn’t broken.  
But it didn’t feel **premium**.

It felt like it was trying too hard.

Then one day, I changed a few things—and my screens started looking like they belonged to a real product.

Not because I added crazy effects.  
But because I finally understood what *expensive* actually means in UI.

---

## Expensive UI is quiet

Premium design isn’t loud.

It doesn’t beg for attention.  
It guides attention.

The first rule I wrote on my wall was:

> “If everything is emphasized, nothing is emphasized.”

So I stopped making everything bold.  
I stopped using too many colors.  
I let the UI breathe.

---

## The 5 rules that changed everything

### 1) Give your layout breathing room  
I started increasing spacing by **just 4–8px** across the screen.

Suddenly:
- sections felt intentional  
- cards felt real  
- text felt readable  

### 2) Reduce your color palette  
I limited myself to:
- 1 brand color (accent)
- neutrals for the rest

Everything started looking consistent.

### 3) Use fewer borders, better shadows  
Too many borders make a UI feel “boxed”.

A subtle shadow + soft border is enough:
- it separates
- but doesn’t scream

### 4) Typography does most of the work  
A premium UI has a clear hierarchy:
- title
- subtitle
- body
- supporting text

I started treating typography like a layout tool, not decoration.

### 5) Micro-interactions, not fireworks  
Hover lift.  
Soft highlight.  
One clean transition.

That’s it.

No circus.

---

## The real secret: consistency

Consistency is the invisible premium.

When a user feels like every screen belongs together, they trust the product.

So I built a small system:
- consistent padding
- consistent radius
- consistent button styles
- consistent text sizes

Now even simple pages look “designed”.

---

## What I do now

Whenever I’m building a new page, I ask myself:

- Is there enough space to breathe?
- Is the hierarchy obvious in 2 seconds?
- Is my accent color used sparingly?
- Do my components feel like one family?

If the answers are yes… the UI usually looks expensive.

---

If you’re trying to level up your design, don’t chase “cool”.

Chase **clear**.  
Chase **calm**.  
Chase **consistent**.

> Premium is not added. It’s removed.
`,
  },

  // ✅ Blog 3
  {
    id: "no-backend-no-problem-building-with-local-data",
    title: "No Backend, No Problem: Building with Local Data Like a Pro",
    slug: "no-backend-no-problem",
    preview:
      "You don’t need a database to ship a clean portfolio. Here’s how I structure local data so projects, certificates, and blogs still feel real.",
    image_url:
      "https://res.cloudinary.com/drfdoiwg1/image/upload/v1763530660/samples/ecommerce/analog-classic.jpg",
    published_date: "2025-08-04",
    content: `
# No Backend, No Problem: Building with Local Data Like a Pro

At some point, every builder meets this moment:

You want your project to look real…  
but you don’t want to build a backend yet.

And that’s fine.

A portfolio doesn’t need a full database to feel professional.

What it needs is **structure**.

---

## The mistake: hardcoding everything in components

I used to do this:

- put data inside the JSX
- repeat card layout for each item
- copy and paste like my life depended on it

It works… until you want to add the 6th item.

Then your code becomes a messy story nobody wants to read.

---

## The fix: a clean “data layer”

Now I do this:

\`src/data/projects.ts\`  
\`src/data/certificates.ts\`  
\`src/data/blogPosts.ts\`

Each file acts like a tiny database.

And my UI becomes simple:

> “Take data → map it → render cards.”

---

## Why this feels professional

Because it separates responsibilities:

- data lives in one place  
- UI focuses on layout  
- you can update content without touching components  

It also makes your app ready for the future:

When you later add Supabase or a CMS, your UI barely changes.

---

## Likes without a backend

Even likes can be done cleanly.

If you’re not ready for a backend, use localStorage:

- store liked slugs
- store like counts per slug

It’s not global likes for the world—but it’s perfect for a portfolio demo.

---

## Images: the clean approach

If you want cards with images, do this:

- store images in Cloudinary  
- save the link in your data file  
- render with \`<img src={...} />\`

If you upload PDFs, convert to PNG for display.

Keep the PDF only for download.

---

## A simple rule I follow

If the content can change, it should live in a data file.

Projects. Certificates. Blog posts.

That way your site grows without your code getting heavy.

---

So no, you don’t need a backend to look serious.

You need:
- clean structure
- predictable data
- consistent UI

And you’ll ship faster than you think.

> Build now. Upgrade later.
`,
  },

];
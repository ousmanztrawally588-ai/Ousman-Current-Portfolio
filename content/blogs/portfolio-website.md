---
title: "Building My First Portfolio Website From Scratch"
date: "2026-03-10"
description: "How I designed and built my personal portfolio website using HTML, CSS, JavaScript, and Bootstrap — from a blank page to a responsive site with a custom gradient hero section."
tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Web Development"]
coverImage: "/blogs/portfolio-website.png"
readingTime: 4
---

Before I touched Next.js or React, I wanted to know I could build a website with nothing but the fundamentals — HTML, CSS, and vanilla JavaScript, with Bootstrap to speed up the layout work. This project, my original portfolio site, was that proof to myself.

## Why Start Here

It's easy to jump straight into a framework and let it hide what's actually happening in the browser. I wanted the opposite: write the markup myself, style it myself, and only reach for Bootstrap where it genuinely saved time (the grid system, responsive utilities, a few pre-built components).

## What I Built

The site centers on a bold gradient hero section — "Hi, I'm Ousman" — with animated tech tags floating across it and clear call-to-action buttons. Below that, I structured the page into four sections: About, Skills, Projects, and Contact, each one a self-contained block of HTML and CSS.

A few specific things I focused on:

- **Responsiveness** — the layout had to hold up on a phone screen just as well as a desktop, using Bootstrap's grid alongside my own media queries where I needed finer control.
- **Animated tech tags** — small CSS animations on the hero section's skill badges, just enough motion to feel alive without being distracting.
- **Clean structure** — every section is its own clearly separated block, so the code stays readable as it grows.

## What I Learned

Building without a framework forced me to actually understand the box model, flexbox quirks across browsers, and how much Bootstrap's utility classes can simplify things I'd otherwise hand-write. It also gave me a much better appreciation for what frameworks like Next.js are abstracting away.

This site is the foundation everything else builds on — including the very portfolio you're reading this post on now, which is a more advanced, config-driven version of the same idea.

The source code is up on my GitHub, and it's the project I point to whenever someone asks where I started.
---
title: "Building the AIU Parcel Tracker System in Java"
date: "2025-12-10"
description: "A behind-the-scenes look at the AIU Parcel Tracker System, a Java Swing application I built with my team to manage parcel tracking for students — covering the object-oriented design, the main menu logic, and what I learned working in a 4-person team."
tags: ["Java", "OOP", "Java Swing", "Group Project", "Software Engineering"]
coverImage: "/blogs/aiu-parcel-tracker.png"
readingTime: 5
---

This was my AI class group project at AIU, and it ended up being one of the clearest lessons I've had in object-oriented design — not from a textbook, but from actually building something with a team.

## The Problem

Students at AIU regularly need to track parcels — packages that arrive on campus and need to be logged, searched, and eventually marked as collected. We built a Java application to handle exactly that: tracking incoming parcels, searching records, and managing collected ones, with a separate admin view for managing the data behind the scenes.

## The Design

We used Java Swing for the interface, built around dialog-driven menus rather than a full GUI framework — simple, but effective for the scope of the project. The core of the system was an abstract `Parcel` class, with two subclasses: `IncomingParcel` and `CollectedParcel`. That single design decision — using inheritance instead of one bloated class with status flags everywhere — made the rest of the system much easier to reason about.

My piece of the project was the entry point and the main menu logic:

- `showMainMenu()` — the user-facing flow, letting someone track a parcel, view all collected parcels, or search for a specific record, all through `JOptionPane` dialogs.
- `showAdminMenu()` — a separate, admin-only menu for managing the underlying parcel data.

## Working as a Team

We split the project four ways, each person owning a distinct class: `Parcel`, `IncomingParcel`, `CollectedParcel`, and `ParcelTrackerSystem`. That meant a lot of upfront conversation about how our classes would talk to each other before any of us wrote much code — interfaces and shared assumptions mattered more than I expected going in.

## What I'd Do Differently

Looking back, I'd push for unit tests around the parcel search logic, and maybe a lightweight persistence layer instead of holding everything in memory during a session. But as a first real exposure to abstract classes, inheritance, and coordinating a shared codebase across four people, this project taught me more about software engineering in practice than any single concept I'd studied on its own.
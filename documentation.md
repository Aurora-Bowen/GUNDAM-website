---
layout: default
title: Documentation
description: Explanatory documentation for the main GUNDAM systems.
permalink: /documentation/
---

# Documentation

<p class="lead">
The GUNDAM documentation explains the main components of the framework
and how they work together during an analysis.
</p>


## Documentation topics

The explanatory documentation is currently organized into four main topics:

1. [Core Architecture](#core-architecture)
2. [Dial System](#dial-system)
3. [Statistical Inference](#statistical-inference)
4. [Applications](#applications)


## Core Architecture

Core Architecture describes how the major GUNDAM components interact.

Topics include:

- configuration files;
- datasets;
- samples;
- parameters and parameter sets;
- the Propagator;
- the Likelihood Interface;
- the overall event-processing workflow.


## Dial System

The Dial System controls how parameter variations modify event weights.

Topics include:

- dial definitions;
- dial scope;
- normalization dials;
- graph dials;
- spline dials;
- surface dials;
- formula dials;
- compiled dials;
- interpolation behavior.


## Statistical Inference

This section explains how GUNDAM evaluates and explores statistical models.

Topics include:

- likelihood evaluation;
- minimization;
- covariance matrices;
- uncertainty estimation;
- parameter scans;
- Markov Chain Monte Carlo methods.


## Applications

This section describes the main command-line applications provided by GUNDAM.

Applications include:

- `gundamFitter`;
- `gundamCalcXSec`;
- `gundamConfigCompare`;
- `gundamFitCompare`;
- `gundamFitPlot`;
- `gundamFitReader`;
- additional analysis utilities.


## Current status

These four documentation areas are temporarily presented together as
a single structured list.

After the website framework is reviewed, the content can be divided
into individual pages where appropriate.

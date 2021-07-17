+++
title = "Making GSoC a valuable experience"
description = "My 2 cents on making GSoC a memorable and successful experience"
date = 2021-07-17
year = 2021
insert_anchor_links = "right"
path="gsoc-and-oss-2"
template="page.html"

[taxonomies]
categories = ["tech"]
tags = ["gsoc", "oss"]
+++

{% cover(src="contri.png") %}
Big feature is awaited!
{% end %}

## What I intend to cover?

This blog is a second part to [this](/gsoc-and-oss). I intend to cover ***key takeaways from the Google Summer of Code program***, so if you are selected as a GSoC student, read ahead!

### Leveraging the opportunity

Google Summer of Code is quite a valuable opportunity to develop your skills for Software Engineering and OSS. Use this opportunity ***wisely*** and ***judiciously***, to get the best out of this program.

**Wisely**, because you are getting an opportunity to work on a project which has the potential to be used by millions of people. Imagine the joy and responsibility you would have, while developing a feature for Numpy and Matplotlib.

**Judiciously**, because your mentors are an invaluable asset for you over the next few months, and *if you network well, help you out with getting your career kickstarted*. You should try to solve your issues which are easily google-able, while you should save time for **high level discussions** and **complex bugs**. Time is a limited asset, so make sure you save time as and when you can, and allow yourself with some backup of time, in case a feature development takes more time than expected. Similar thing happened with me as well, and since I had saved some time, I was able to cover up for the lost time.

### Blogging and communicating with your mentor

***Blogging and communication*** is the key to GSoC. Having good communication setup and weekly meetings are imperative to keep the mentors updated with your work.

Clear cut communication and asking for clarifications is important, helps you in understanding the expectations and approach which your mentor might have for your project. Your mentor knows the possible hurdles that you might not encounter, so having clear ideas and clarification helps you in enlisting and keeping the issues at bay.

**Blogging** helps you to document out the progress you have had for the week. It is not possible(*nor it is suggested!*) to keep an ***eye/micro-manage*** every work that you do, so make sure you ***blog your progress*** and what kind of concrete progress you have achieved for the week. It also ***helps you and your mentor to assess the progress*** of your work, so changes with the timeline and end goals can be adjusted.

### PR Reviews: An opportunity for learning

Pull requests are an important aspect of GSoC. You can have the best code written for the project, but if you haven't passed the PR Reviews, chances are that your patch isn't suitable to be merged.

**PR Reviews** might sound a bit intimidating(and it is for a certain extent), so make sure you break up your project into ***multiple parts***, and ***push your PR as early as possible*** for review. It is natural to have [15-20](https://medium.com/@yashrsharma44/pull-requests-merged-in-for-gsoc19-ndcube-95a9fd15c8b6)(*don't quote me on this, can vary as you agree with your mentor*) PRs, helps you in managing your logistics and getting ahead with the PR reviews.

The communications can get ahead for a **100 conversations**, so the key is to keep the ***changes small and decoupled***. This helps in getting more faster reviews, and the changes associated with it is gradual, rather than pushing a **1000+** line PR, which is quite clunky and tougher to get this merged.

Another important aspect of making PRs, is that ***don't get blocked on one PR***! Have **2-3** ideas that you would want to work on them ***parallely***, so you can wait on one PR to get merged, while you spend some time on another PR. *This is another reason, to break a bigger PR into small chunks, much easier to review and get it merged.* Also provides you with some time to parallelize you work.

### Tests and Docs are equally important!

Software Engineering follows the mantra -

> Code, Test and Docs

Documentation can be written when the feature is ready, but tests should be written gradually as you develop a feature. ***Test Driven Development*** is something, you can have a look, but I mostly found to write the code and then test it up later, much convenient.

***TDD*** is something you can undertake for a ***small package/module***, and it is generally a full-proof development process, because you already define the contract of the black-box(in this case, your package), and the inherent logic should satisfy the contract.

### Evals are scary, but make sure both of you agree on a milestone

Google Summer of Code has two evaluations as of 2020, Mid Term Evaluations and End Term Evaluations. This Blog Post was out after the first evaluations, so you might have got an idea about how evaluations work. The project is assessed with the kind of work done, and how much progress we have had. Mentors write out some suggestions and remarks about the work done uptil now.

It is imperative to ***understand and clarify the suggestions*** that has been made by the mentor during Mid Term Evaluations. It can happen that the mentor and the student might not be on the same page about the progress, so having a ***1:1 talk with them is really crucial***.

Having an objective goal for each evaluations is really important, as it helps out in mapping out the expectations as time progresses. [In my project](https://github.com/sunpy/sunpy/wiki/GSoC-2019-Yash-Sharma), I wrote up clear cut features that I intend to achieve before the evals, so being explicit in the metrics you choose to measure the progress of your project is helpful.

## Journey after Google Summer of Code

The journey after GSoC is ***quite variable, as you want to lead up to***. You are the captain of you own ship, so you are free to utilise the opportunities.

You can use the learnings that you gathered during the summer, and keep working on the project/community in your free time. As mentioned before, OSS is a voluntary experience, and you can work on your free time if you wish.

Many people choose the opportunity to work with the community, while some wish to experiment with other groups. Feel free to utilise the learning and apply it into a field of interest.

### My Personal take

Personally, I found that the time spent after the project is important, if you want to explore an ***internship opportunity/full time opportunity***. Many of the mentors, for instance might be software engineers/research engineers, who have been involved with your work. They are certainly able to vouch for your work, and refer you to any position of interest.

That does not mean that you cannot leverage your opportunity outside this. You can apply to different companies, and since your work is Open Sourced, people can see the work done and get an idea about your strengths.

> For me, I didn't leverage this much after my GSoC, because I wanted to pursue Software Engineering, and astrophysics - as much awesome as it sounds, didn't match my aspirations. In my 3rd year, I went ahead to take part in LFX Mentorship, and this time, I did leverage my networking and receive an internship opportunity. I had already taken part in my campus internship drive, so I had to decline the interview opportunity, but all in all, I still spend time with my new organisation.

Another reason, why you would spend time with an organisation, is the ***work***. Yes, if you really like the work, there is no reason to stop contributing. ***Getting a good fit with a team, where you like the work and the people***, is the best possible scenario you can have, to pursue your interests.

> Let's say you want to explore Observability and Monitoring, and want to know how the software was written, and works in production, then you wouldn't want to stop working with them. This is one of the reasons, why people stick through after completing GSoC, and if you are interested in pursuing your interests, it makes sense to work with organisations.

### Passing the baton

It is important to pass the baton to the juniors and people who need to be ***enlightened by this lifestyle of Software Engineering***. You must have got an end-to-end idea of how to get started with OSS; now it is time for you to share the idea and wisdom to someone, who would benefit.

Note that, ***don't get too attached with the notion of GSoC and other OSS programs***, it's totally fine, if you don't get through. I had talked about this aspect briefly in my [previous blog](/gsoc-and-oss#getting-selected-or-not).

### Open Source is not a destination: It is a way of life

***Open Source is one of influential movements and lifestyle for Software Engineering***. Being connected to Open Source, is like being connected to roots. *You don't get harmed if you don't, but you miss out on a lot of opportunity.*

Open Source has revolutionized the way, ***software is developed and consumed***, and ***proprietary software, unless backed by Big Tech Companies***, cannot be vouched for. I mean, no one would vouch for a software, whose source code is closed source. You need confidence on the software, and only way is to see the source code.

***Numerous startups have come up with the Open Sourcing their code***. The main priority for an early stage startup, ***is not to protect their idea***, but to make the community familiar with their idea that they are selling, and one way to ***vouch the reputation and dependability***, is to Open Source their code and create a community around it. 

> 21st century is a great time to be in Open Source, and whatever field/career you pursue later, Open Source experience will certainly help you in understanding the current model of Software Engineering and its related fields, it impacts.


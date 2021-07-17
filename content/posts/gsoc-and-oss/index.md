+++
title = "GSoC and OSS"
description = "My experiences with Google Summer of Code and Open Source Software"
date = 2020-12-25
path="gsoc-and-oss"
template="page.html"

[taxonomies]
categories = ["tech"]
tags = ["gsoc", "oss"]

[extra]
metadata_image = "/gsoc-logo.png"
+++

{% cover(src="gsoc-logo.png") %}
Google Summer of Code! One of the best things that happened to me :D
{% end %}

# What I intend to cover?

I plan to cover the insights and pointers that I gained, while being a part of the fantastic Open Source Programs over the world, **Google Summer of Code**!
I won't cover the technical aspects of participating in **GSoC**, but rather focus on the learnings and takeaway from this program. For list of resources useful for GSoC, refer [**this**](https://yashrsharma44.medium.com/resources-for-google-summer-of-code-5c2ac800849b).

For brevity, I have broken the blog into two parts - [_**First one**_](#) covering the journey leading to GSoC, and [_**the second**_](/gsoc-and-oss-2) covering my experience with my project.

# Ascending the everest; Commencing the journey

I have further broken down the different aspects of GSoC into coherent components, which would provide context while I discuss them further :P

## Philosophy of Google Summer of Code

With any work that you do, it is important to understand the philosophy and its goals, that are aligned with it. Whenever you sign up for anything, you also _**sign up with the philosophy and the work ethics that come with it**_. It might be surprising, if you don't agree with it, so it's imperative to understand, what it takes to be an active GSoC contributor, and a life-long OSS contributor!

### Start Early and Start Small

With any habit, it is imperative that you start small and make sure you break down things into manageable portions.
While starting with Open Source contributions, there are lot of things that you might need to cover, in order to get equipped with the contributions. _**You should get aware of basics, such as basic command line env, git, and debugging.**_ Note that these are necessary to be learnt eventually, but not at the start. You can learn them eventually. Here are some resources -
- https://missing.csail.mit.edu/
- https://www.udacity.com/course/version-control-with-git--ud123

### Learn it as you go

The best part of Software Engineering is that, no one knows everything! _**Everyone learns as they practically use the tools**_, and Open Source is no different than that. Knowing basics about the different aspects of Software Engineering is important, once you know them, it is easier to extend your knowledge to your tech stack.

I found this quite useful for visualising the requirements -
* https://roadmap.sh/

### Its about the community

_**Open Source holds it charm due to its community**_. The idea of OSS exists because of the voluntary and passionate work the mentors and contributors do. So it becomes natural to have high expectations from them. However, it is fair to understand and respect the fact that it is voluntary work, and no one is accountable. People mentor out of interest and folks should respect that.

Another aspect is about the _**learning and working on your field of interest**_. For instance, if you are involved in AI research, and get hold of an organisation with fantastic community to learn, it is the best opportunity. The mentors and contributors are equally competent, and the peer group will help you in growing your knowledge and develop industry standard with your research. If you happen to participate due to GSoC, and not because of learning, you miss an opportunity to expand your knowledge and networking.

_**GSoC is a result of community, and not the other way round**_. People who participate out of interest and learning vision, are bound to enjoy the process more, than people who want to participate in GSoC. _**Community provides the context of the program, and without context, the program is mere body without soul.**_


### Being active in the community

GSoC requires you to be active in the community you are contributing to. It does not mean that you have to lurk at the mailing lists and communication channel all the time, you can also choose to review the _**issues**_, _**pull requests**_ and _**discuss the proceedings**_ with the contributors, while helping out others to onboard with the process.

Everyone likes to work with a person, who has been active and involved with the community. It is also beneficial for improving your soft skills such as, _**how to ask the right question**_, _**how to navigate through common issues**_, and _**how to be a better contributor**_.

This also provides you a first hand experience of working remotely, with minimum physical hinderance, and enabling you to utlise the plethora of online resources.

## Having a sound technique

{% cover(src="swaugh-defence.jpg") %}
Having a sound technique in cricket is of paramount importance!
{% end %}

Having a strong and dependable technique will help you work on your ideas more, rather than focussing on churning code. GSoC isn't supposed to be a program where you churn code, but an event to _**develop your software engineering skills, rather than programming skills**_. Sure, you should have decent programming skills, because if you don't have them, it would become difficult to work with the strengths and weakness of the programming language.

For instance, Golang has a nice abstraction for _**goroutines**_, and helps to write concurrrent code much more easily. The same is difficult to write in C++/Java, because you need to manage the overhead of using threads. So having a working knowledge of the programming language that you plan to use is important, as it would help you to _**demarcate what is possible, and what is not.**_

Software Designing skills develop, once you spend reading the codebase and the design decisions taken. _**Design docs are a great place**_, where they discuss about the different approaches to solve the problem, and choose the one that is practical and feasible. You can develop your taste and understanding about why some components are designed in such a manner. Here is an example for this - [_**https://thanos.io/tip/proposals/**_](https://thanos.io/tip/proposals/)

You eventually need to make a proposal for your GSoC project, so you get an opportunity to think and exercise your software designing skills. The mentors are always happy to help you out with this process, so don't be afraid to approach them.

GSoC provides you with the opportunity to spend your summer develop these skills, as you can use this opportunity to learn from the mentors and online resources. _**It is not imperative to have these skills before(because GSoC was designed to help you cultivate these skills!)**_, but you should strive to work and develop the taste eventually.

### Choosing projects and organizations

_**Choosing organisations is important more than choosing project.**_ Unless you are experienced to choose a project, organisations play an important role for learning. **_For folks who are participating for the first time, it is important to choose organisations that facilitate mentorship_**. You are not only commiting to the project, you are also signing up for a work culture which might suit you or not, depending on the goals.

For example, if you plan to work with Kubernetes as a GSoC organisation, be ready to work on your own with little hand holding. Kubernetes is an advanced organisation where the problems they solve using Open Source requires more idea and experience. Open Astronomy, on other hand, helps onboarding new participants with more mentorship and guidance.

All these are personal opinions and might be biased, so choose the ones which are beginner friendly, and you would enjoy the journey!

_**There is the balance of choosing an easy project with more competition, and choosing a tough project with less competition. So the choice is yours.**_

### Sprints are a way to go

While this is not scalable, I personally find [sprints](https://www.atlassian.com/agile/scrum/sprints) _**an important tool to develop any skills at start of your program**_. You should choose an issue that you want to solve, and sprint through them to solve it. When you impose a time crunch, you come up with innovative ideas to solve your problem, and _**instead of having a sophisticated approach**_, you come up with a _**practical and simple approach**_. This makes sure you have a proof of concept to work with, and iterate on the process more.

### Proof of Concepts

Proof of concepts are an effective way to test out your hypothesis. _**@thealphadollar**_ has a good account on [this](https://thealphadollar.me/experience/2018/12/03/how-i-prepared-for-gsoc-18.html).

Let's say you have an approach to solve your problem, and you have designed your approach and different components. You might know which components are tricky to work with, and might not know if the behaviour is supposed to be what you planned to be.

> Here is an example of a [problem statement](https://docs.google.com/document/d/1pf94fUtzJTffWLdkHkF4VeeSTpbJuTCJKWAv_-KSFfI/edit?usp=sharing) and how I came up with a [solution](https://github.com/yashrsharma44/batch_running_jobs). This problem was really tricky for me to work with, as I encountered this for applying for a startup in my second year. Although I didn't solve it, because I didn't had much knowledge to work with. Fortunately, after a year and a half, I finally managed to formulate an approach for it. This was a perfect example for proof of concept, as I had multiple iterations before arriving at the final solution :P

Proof of concepts are a best way to test out your hypothesis, and make sure your assumptions are correct/works in a behaviour that you expect. Often, it is possible that you might not know how a component can be designed using an existing design, which is not known at present. The best way is to design a solution from scratch, and iterate on the process, rather than working on your project with your approach, only to realise that the approach is not feasible.


### Getting selected, or not {#getting-selected-or-not}

I intentionally kept this at last, because after all this is a possibility, and you should accept it. Rejections can happen from all sort of reasons; _**proposal not accepted**_, _**organisations pulled out at the last moment**_, _**projects removed at last moment due to unavailability of mentors**_, and so on. Surprisingly, I have had a first hand experience of all of the events, which happened to my friends and OSS folks, so it's pretty realistic.

The best way is not to take this personally, but rather accept that it's a _**game of probability**_, and _**due to mentors having limited slots proposals can be pulled out inspite of sounding brilliant on paper**_. Google's main aim was to introduce you to the culture of OSS, and you having spend a couple of months, would have still gained a lot.

Working on with the community is imperative, because it helps you _**build your skills**_, and you might get an _**opportunity to work with your mentors with another program**_. One of my closest friend was working with Julia, and inspite of having solid contributions and proposal, he still didn't get a chance to work. However, because he was quite involved with the community, he got a chance to participate in [_**MLH Fellowship**_](https://fellowship.mlh.io/).

Your contributions are quite valuable, and you can choose to work on your project if you want to. Open Source contributions are quite valuable, and if you happen to interview for Software Engineering roles later in your career, _**those stand out to be the most valuable aspect of your resume**_. Senior engineers love open source contributions, as it helps you to transparently judge a candidate with their knowledge and understanding.

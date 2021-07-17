+++
title = "Profiling:4th aspect of Observability?"
description = "Post about learning more about Profiling Distributed Systems"
date = 2021-07-18
path="profiling-1"
template="page.html"
draft = true
[taxonomies]
categories = ["tech"]
tags = ["profiling", "distributed-systems"]
+++

{% cover(src="VQ0nW.png") %}
Flamegraphs are a new addition to profiling: Courtesy of Brendan Gregg
{% end %}

Profiling an application means to observe the memory and cpu utilization of the machine, in which the software runs. Profiling is one of the aspect of Observability - apart from Logging, Tracing and Monitoring.

Profiling has been used from a long time, and each programming language either provides inherent support for Profiling(for example Golang), while some tools exists for profiling your application. 

> To profile an application, it would mean to ***collect the stack trace of the call sequence***, that led to execution of a function. We collect these ***stack traces and then combine them as profiles***, so that we can use to visualize the amount of resources consumed, for that type of resource.

There are different types of resources that we can collect profiles for, so it depends on the user, what sort of profiles they want to collect, to observe the system.

## Why use Profiling?

Profiling is useful as a debugging resource. Particularly, when you application needs to be ***observed***, you would need to check how much CPU and RAM your application is using. This also means that you would need to check your logs and metrics to see what happened.

You would want to observe your application, if - 
1. Application uses more resources, than it is supposed to use
2. You application is facing a downtime, OOM killed.
3. You want to optimize your application, and reduce the time and space allocation

Profiling helps in ***1 and 3***. For 2, you would need Continuous Profiling, which I would be talking more.

You can run your application with profiling enabled, easily check the profiles, and see the resource allocations made by a specific functions/part of code, and then investigate your codebase to optimize your code. It eases the toil of figuring out which part of code has a higher resource utilization, and refactor the code to regulate the utilization.

## How can I try Profiling?

Some languages make profiling as easy as running a command - In go you can do for CPU profiling - 

```go
import _ "net/http/pprof"

func main() {
    
    f, err := os.Create("name_of_profile")
    if err != nil {
        log.Fatal("could not create CPU profile: ", err)
    }
    defer f.Close() // error handling omitted for example
    if err := pprof.StartCPUProfile(f); err != nil {
        log.Fatal("could not start CPU profile: ", err)
    }
    defer pprof.StopCPUProfile()
    // your code from here
}
```

## Continuous Profiling: A Way for Observability

Normally, profiling would mean that you can collect snapshots and compare them when an incident happens, or if you are making a release, you can compare the resource allocations between 2 versions, and see it for yourself, if some changes bring in a drastic changes 

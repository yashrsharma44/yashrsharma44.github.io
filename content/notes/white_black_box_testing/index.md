+++
title = "Black Box and White Box Testing"
description = "TIL post about types of testing"
date = 2021-08-02
path="white_black_box_testing"
template="page.html"
[taxonomies]
categories = ["tech"]
tags = ["notes", "testing", "grpc-middleware"]
+++

{% cover(src="grpc.png") %}
Seems like we might have a v2 version for gRPC middlewares!
{% end %}

I was going through one of the PRs of the [`go-grpc-middlewares`](https://github.com/grpc-ecosystem/go-grpc-middleware/issues/388) and was required to make a utility function private. It was necessary, because we use that function internally, and it does not make sense to make it public. Sounds like a fair requirement?

While I tried to make it private, I found some deeper implications. For starters, I found that, the testing package used the particular function - [`JitterUp`](https://github.com/grpc-ecosystem/go-grpc-middleware/pull/390/files#diff-869d58a362b77f68a1a7c6859b92e189c49d33d0daa1fcff71cb74b88a829398R21), which made it tougher to make it private.

On going through numerous stack overflow answers, I found this [post](https://stackoverflow.com/questions/19998250/proper-package-naming-for-testing-with-the-go-language) quite interesting and educational for how testing would work in Golang, particularly the conventions.

## White and Black Box testing

The packaging of test files can follow the convention of white/black box testing, and this made me ponder about the design decisions we might want to take for how we want to test the package.

### Black Box Testing 

We can use different package names(and different package) for tests and core logic. For instance, `package myfunc` for core package and `package myfunc_test` for the tests. This makes sure, you are calling the API Interface of your core package, so that your tests might equally import them, as any other function would do.

### White Box Testing

We can use same package name `package myfunc`, so that we can use all the non-exported identifiers, functions and methods. Since `JitterUp` was being used internally in the tests as well, it made sense to make the test package internal.


## Which one is better?

Ultimately, both of them are fine to use, as long you know what to expect. Black Box testing provides api compatibility out of the box, while white box testing makes sure that you can use internal methods and functions.
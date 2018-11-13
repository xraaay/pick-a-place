##Question #1: What is React? How is it different from other JS frameworks?
Although this sounds like a relatively simple question, it’s really asking the candidate to state an informed opinion about React, as well as any competing alternatives. In short, this question is designed to test a candidate's knowledge about the JavaScript ecosystem at large while also pressing for specifics on what makes React unique.

Let’s look at each part of the answer separately.

What is React?
React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications.

The key point in this answer is that React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” architecture. Therefore it has no opinions on the other pieces of your technology stack and can be seamlessly integrated into any application.

How is React different?
The answer to this question will likely vary depending on the candidate's personal experiences. The important thing is to listen for real-life examples provided and opinions on whether or not the candidate prefers React and why.

Because React is a small library focused on building UI components, it is necessarily different than a lot of other JavaScript frameworks.

For example, AngularJS (1.x) approaches building an application by extending HTML markup and injecting various constructs (e.g. Directives, Controllers, Services) at runtime. As a result, AngularJS is very opinionated about the greater architecture of your application — these abstractions are certainly useful in some cases, but in many situations, they come at the cost of flexibility.

By contrast, React focuses exclusively on the creation of components, and has few (if any) opinions about an application’s architecture. This allows a developer an incredible amount of flexibility in choosing the architecture they deem “best” — though it also places the responsibility of choosing (or building) those parts on the developer.

I recently migrated an application originally written in AngularJS to React, and one of the things I loved most was…

By comparing and contrasting React with another library, not only can the candidate demonstrate a deep understanding of React, but also position themself as a potentially strong candidate.

Be prepared to ask some follow-up questions as well, such as:

Under what circumstances would you choose React over another technology? For example, React vs Angular or React vs Vue.
If React only focuses on a small part of building UI components, can you explain some pitfalls one might encounter when developing a large application?
If you were rewriting an AngularJS application in React, how much code could you expect to re-use?


##Question #2: What happens during the lifecycle of a React component?

-it mounts and unmounts
-loads the constrcutor and props
-renders
-updates the state
-mounts updates and unmounts and um it mounts after the initial render it renders once mounts updates and unmounts
-okay, constructor, states loaded renders component did mount
-constrcutor renders component did mount updating phase it renders then component did mount no no no caomponent will update unmounting component will unmount
- 4 stages, intiailizing stage ,mounting stage, update, and unmount
    -constructor
    -renders then component did mount
    -if therse any stages to the state/props it rerenders

        -constructor
            -render
        -componentdidmount
            -this.setState({})
            -render
        -componentdidupdate
        -componentwillunmount

##Question #3: What can you tell me about JSX?
-
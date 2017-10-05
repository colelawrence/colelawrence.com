---
title: "Hugo Pygments"
date: 2017-09-13T07:17:14-05:00
type: "post"
draft: false
---

This is just a demonstration post to see how Hugo is rendering syntax and such.

![Garst App](/images/2017-01-garst-app-logo.png)

```javascript
// Here is some JavaScript
function plural(list, singular, plural) {
  return Array.from(list).length === 1 ? singular : plural;
}
```

Look at the Typescript.

```typescript
interface RenderPage {
  render(): string
  name: string
}
type Person = {
  name: string
  age: number
}
type Partial<T> = {
    [P in keyof T]?: T[P]
}
type PartialPerson = Partial<Person>
// Here is some TypeScript
function plural(list: any, singular: string, plural: string) {
  return Array.from(list).length === 1 ? singular : plural;
}
```

Unfortunately, hugo depends on only pygments for serverside rendering, and pygments has very poor syntax highlightin implementations. Notice in the TypeScript code highlights that `type` and `PartialPerson` are given the same `.nx` class for styling despite them being completely different. Or, notice that the TypeScript Pygments lexer thinks that the end of the ternary `: plural` is the same as `: string` in the parameters of the above function. _tsk tsk..._ We can make do though by just not highlighting those things special.

The next steps for this "blog" is to collect stories and organize them!

Don't expect any sort of timeline, though.

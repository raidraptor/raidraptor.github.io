---
# the default layout is 'page'
title: contact
permalink: /contact/
order: 4
---

<form action="https://getform.io/f/3f6c2296-9f63-4654-b9b2-bcf632590df7" method="POST">
    <input type="text" name="name">
    <input type="email" name="email">
    <input type="text" name="message">
    <!-- add hidden Honeypot input to prevent spams -->
    <input type="hidden" name="_gotcha" style="display:none !important">
    <!-- checkbox handle -->
    <input type="checkbox" name="subscribe" value="yes" checked>
    <input type="hidden" name="subscribe" value="no">
    <!-- radio button handle -->
    <input type="radio" name="gender" value="male" checked>
    <input type="radio" name="gender" value="female">
    <input type="radio" name="gender" value="other">
    <!-- select field handle -->
    <select name="work-experience">
        <option value="one-year">0-1 years</option>
        <option value="one-five-years">1-5 years</option>
    </select>
    <button type="submit">Send</button>
</form>

> Add Markdown syntax content to file `_tabs/about.md`{: .filepath } and it will show up on this page.
{: .prompt-tip }

---
name: Strict Prompt Compliance
description: Enforces that every single requirement in a user prompt must be addressed without omissions.
---

# Strict Prompt Compliance

**CRITICAL BEHAVIORAL RULE:**

When the user provides a detailed prompt, you MUST read it carefully and fulfill **ALL** stated requirements, constraints, and instructions in their entirety. 

- **No Omissions:** Do not skip steps, defer tasks, or omit requested files/configurations (e.g., if the user asks for a UI library with Storybook, you must set up Storybook immediately).
- **Thoroughness:** Fulfill the prompt to the letter to respect the user's effort in writing detailed prompts and to avoid wasting tokens on corrections.
- **Verification:** Before concluding your response, internally verify your actions against the user's prompt to ensure 100% coverage of their requests. If you missed something, fix it before responding.

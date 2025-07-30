---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: "Welcome"
permalink: /
---

<div align="center">

# 👋 Hello! I'm [Your Name]  
### Ecommerce Manager & Technical Specialist  
**Blending business with code to build efficient, scalable ecommerce systems.**

</div>

---

## 🧩 What I Do

- ✅ Manage full ecommerce operations (storefronts, inventory, strategy)
- 🛒 Build custom tools using **PHP**, **SQL**, and **HTML/CSS**
- 💡 Automate workflows, improve UX, and increase online revenue
- 🧑‍💻 Freelance tech consultant for ecommerce businesses

---

## 🚀 Explore My Work

| Section | Description | Link |
|--------|-------------|------|
| 📄 Resume | My complete experience and skills overview | [View Resume](/resume) |
| 💼 Projects | Case studies & personal technical projects | [View Projects](/projects) |
| 🔧 Freelance Work | Client-based ecommerce and dev projects | [View Freelance Projects](/freelance-projects) |
| 📨 Cover Letter | Introduction letter for job applications | [Read Cover Letter](/coverletter) |

---

## 🖼️ Featured Projects

{% for post in site.categories.project limit:3 %}
### {{ post.title }}
{{ post.excerpt | strip_html | truncate: 100 }}
[Read More]({{ post.url }})
---
{% endfor %}

[→ See All Projects](/projects/)

---

## 📬 Get In Touch

Interested in working together or hiring me?

- 📧 [you@example.com](mailto:you@example.com)
- 💼 [LinkedIn](https://linkedin.com/in/yourprofile)
- 📄 [Download Resume](/resume.pdf)

---

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  text-align: left;
}
</style>
# gh-test-automations

Testando ci-reusable

- [x] testar via ci-reusable
- [x] criar pull request via ci-reusable
- [ ] criar badge coverage
- [ ] checar novamente a criação de pull request com a action de ci-reusable
- [ ] release ainda não funciona....
- [ ] implementar publish
- [ ] implementar deploy-docs

```mermaid
graph TD
    A(🚀 Commit in develop) --> B(🧪 Run test)
    B --> |Success| C(🔄 Run create/update-pr)
    C --> D[👥 Review & Merge]
    D --> E(🧪 Run test in main)
    E --> |Success| F(📚 Run deploy-docs)
    E --> |Success| G(🏷️ Run release)
    G --> |Success| H(📦 Run publish)

```


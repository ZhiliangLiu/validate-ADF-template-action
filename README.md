# data-factory-validate-template-action

Validate ADF templates

### Example Usage

```yml
steps:
  - uses: actions/checkout@v2

  - name: Validate template
    id: validate-template
    uses: ZhiliangLiu/validate-ADF-template-action@alpha
    with:
      path: $GITHUB_WORKSPACE
```

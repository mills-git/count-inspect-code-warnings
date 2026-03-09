# Count InspectCode Warnings

Custom GitHub Action for reading SARIF files output by the Resharper InspectCode tool and counting the number of warnings

## Inputs

### `code-issues-file-path`

**Required** The path to the SARIF file containing the code issues

## Outputs

### `warning-count`

The number of warnings found

## Example usage

```yaml
uses: mills-git/count-inspect-code-warnings
with:
  code-issues-file-path: CodeIssues.json
```
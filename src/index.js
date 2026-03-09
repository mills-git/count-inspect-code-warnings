import * as core from "@actions/core";
import * as github from "@actions/github";

try {
    const codeIssuesFilePath = core.getInput("code-issues-file-path");

    const content = JSON.parse(fs.readFileSync(codeIssuesFilePath, "utf-8"));

    let numberOfWarnings = 0;

    for (const result of content.runs[0].results) {
        console.log(result);

        if (result.level === "warning") {
            numberOfWarnings++;
        }
    }

    core.setOutput("warning-count", numberOfWarnings);
} catch (error) {
    core.setFailed(error.message);
}

@echo off
powershell -NoProfile -Command "[Console]::Out.Write($env:GITHUB_TOKEN)"

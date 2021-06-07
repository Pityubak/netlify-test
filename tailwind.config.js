const colors = require("tailwindcss/colors")

const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        circleRight: "circleRight 5s linear forwards",
        circleLeft: "circleLeft 5s linear forwards",
      },
      spacing: {
        50: "12.5rem",
        100: "25rem",
        150: "37.5rem",
        136: "34.5rem",
      },
      rotate: {
        135: "135deg",
      },
      maxHeight: {
        "max-h-120": "30rem",
      },
      backgroundColor: theme => ({
        ...theme("colors"),

        pine: "#157A6E",
        pineDark: "#0C463F",
        header: "#574AE2",
        badge: "#2B2B2B",
        prl0: "#D81E5B",
        prl1: "#AB4E68",
        prl2: "#B1A4F4",
        prl3: "#D3D5D4",
        prl4: "#FFE1A8",
      }),
      zIndex: {
        "-1": "-1",
        100: "100",
        150: "150",
      },
      ringColor: {
        badge: "#FFF05A",
      },
      screens: {
        portrait: { raw: "(orientation: portrait)" },
        blg: "1400px",
        ...defaultTheme.screens,
      },
      flex: {
        split: " 0 0 21%",
      },
      borderColor: theme => ({
        exp: "#FFCF00",
        pine: "#157A6E",
      }),
      translate: {
        125: "125%",
        "-125": "-125%",
      },
      textColor: theme => ({
        primary: "#D3D5D4",
        secondary: "#D90368",
        badge: "#2B2B2B",
        pine: "#157A6E",
        pineDark: "#0C463F",
        icon: "#6A4C93",
        prl3: "#D3D5D4",
      }),
      backgroundImage: theme => ({
        shiny:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iMTUwMCIgaGVpZ2h0PSIxMDAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB2aWV3Qm94PSIwIDAgMTUwMCAxMDAwIj48ZyBtYXNrPSJ1cmwoJnF1b3Q7I1N2Z2pzTWFzazEwNDImcXVvdDspIiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMTUwMCIgaGVpZ2h0PSIxMDAwIiB4PSIwIiB5PSIwIiBmaWxsPSJyZ2JhKDQzLCA0MywgNDMsIDEpIj48L3JlY3Q+PHBhdGggZD0iTTAsNDc4LjQ2MkMxMDYuMjMzLDQ3NS43ODMsMjE1LjkzMyw1MzAuNzY0LDMxMi4yNTUsNDg1Ljg3OEM0MTEuOTg4LDQzOS40MDIsNDY5LjQ4OSwzMzUuMyw1MTguNTUxLDIzNi44MTRDNTY4LjkyOCwxMzUuNjg3LDYwNS4wNTUsMjYuODUyLDU5Ny4wNjQsLTg1Ljg0NUM1ODguNzE4LC0yMDMuNTQ2LDU2OS44NywtMzQyLjY0Nyw0NzIuNzEzLC00MDkuNjA4QzM3NC4zMDcsLTQ3Ny40MywyNDAuMzYxLC00MDEuNjAyLDEyMS40NTQsLTQxMy42MzZDMzEuMzMyLC00MjIuNzU3LC00OS4wMzUsLTQ4Ni4wNTUsLTEzOC40MzMsLTQ3MS40NThDLTIzMi45MDEsLTQ1Ni4wMzMsLTMyNC45MTEsLTQwNy44ODUsLTM4Mi40MTMsLTMzMS4zNjNDLTQzOC41MzIsLTI1Ni42OCwtNDMzLjEzMiwtMTU2LjYzNywtNDQ0LjY2MSwtNjMuOTMzQy00NTUuOTU5LDI2LjkxNSwtNDY4LjQ0NCwxMTUuNjIzLC00NDkuMTMxLDIwNS4xMTFDLTQyNS45NzMsMzEyLjQxMiwtNDE2LjMxNCw0NDQuODE4LC0zMjIuNTQ0LDUwMS44ODlDLTIyOC41NTcsNTU5LjA5MiwtMTA5Ljk5MSw0ODEuMjM2LDAsNDc4LjQ2MiIgZmlsbD0iIzIyMjIyMiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAwIDE1NTEuODExMDAwMDAwMDAwMUMxNjI1Ljk2NCAxNTg2LjYxNCAxNzYyLjcgMTY0Ny44OTQgMTg4MS43NzkgMTU5NC4wNTkgMjAwMi4zMDcgMTUzOS41NjkgMjA4MS42NjUgMTQwNy4wODUgMjEwNy4yMDEgMTI3Ny4zIDIxMzEuMDc0IDExNTUuOTcgMjAyNi4zODA5OTk5OTk5OTk5IDEwNDkuMTY1IDIwMTMuMTg0IDkyNi4yMTUgMTk5OS4yMzEgNzk2LjIxOCAyMTA2LjcyOCA2NDYuODM0MDAwMDAwMDAwMSAyMDI4LjMwMjAwMDAwMDAwMDEgNTQyLjIyMzk5OTk5OTk5OTkgMTk1MS4wNjMgNDM5LjE5OCAxNzg3LjI5MSA0NzQuNDk1IDE2NTkuOTk1IDQ1NS4xMDc5OTk5OTk5OTk5NSAxNTUwLjM1OSA0MzguNDEwOTk5OTk5OTk5OTQgMTQ0MC41NSA0MDMuOTI5IDEzMzQuNTYyIDQzNi41NzAwMDAwMDAwMDAwNSAxMjI5LjIzNCA0NjkuMDA4MDAwMDAwMDAwMDQgMTE2Mi40NDkgNTYzLjUxOSAxMDc4LjAwOSA2MzQuMzQzMDAwMDAwMDAwMSA5NzUuNDU0IDcyMC4zNjEgNzkxLjkzOCA3NjMuNTU2IDc4NS4zMjMgODk3LjI0NSA3NzguNDkzIDEwMzUuMjgzIDk1OS4yOTcgMTEwMS4xMjMgMTA0OS43NDMgMTIwNS42MjUgMTExMS43MzEgMTI3Ny4yNDcgMTE1OC4yNjQwMDAwMDAwMDAxIDEzNTcuMTcgMTIzMy4zNTYgMTQxNC45MDYgMTMxNC4yMDEgMTQ3Ny4wNjQgMTQwMS43MDUgMTUyNC42NTMgMTUwMCAxNTUxLjgxMTAwMDAwMDAwMDEiIGZpbGw9IiMzNDM0MzQiPjwvcGF0aD48L2c+PGRlZnM+PG1hc2sgaWQ9IlN2Z2pzTWFzazEwNDIiPjxyZWN0IHdpZHRoPSIxNTAwIiBoZWlnaHQ9IjEwMDAiIGZpbGw9IiNmZmZmZmYiPjwvcmVjdD48L21hc2s+PC9kZWZzPjwvc3ZnPg==')",
        shiny2:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgY2xhc3M9InctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgei0wIgogICAgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj4KICAgIDxnIG1hc2s9InVybCgmcXVvdDsjU3ZnanNNYXNrMTA1MyZxdW90OykiIGZpbGw9Im5vbmUiPgogICAgICAgIDxyZWN0IHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgeD0iMCIgeT0iMCIgZmlsbD0icmdiYSg1MiwgNzUsIDcxLCAxKSI+PC9yZWN0PgogICAgICAgIDxwYXRoIGQ9Ik0wLDQ5Mi4zOTNDOTQuNDA0LDUwMy4zMiwxOTIuODA1LDQ3NS41MDQsMjY5LjY4OSw0MTkuNjQ0QzM0NC42NDcsMzY1LjE4NCwzNzIuMDQyLDI3MS41Myw0MTYuMTQzLDE5MC4wNDZDNDYzLjc5NSwxMDIuMDAxLDU2My40ODEsMTkuNTQ4LDUzOC43MzIsLTc3LjQ1OEM1MTMuNDgzLC0xNzYuNDI1LDM3NC44NzIsLTE5MC4yNjksMzAxLjA5NCwtMjYwLjlDMjM2Ljk0NiwtMzIyLjMxMiwyMTMuOSwtNDIwLjQ3OCwxMzUuOTYzLC00NjMuMDQ2QzQ5Ljk2MiwtNTEwLjAxOSwtNTcuNTQ3LC01NDIuNDM5LC0xNDguNzUxLC01MDYuNTk5Qy0yMzkuMjQ1LC00NzEuMDM3LC0yNzUuNjQzLC0zNjUuNDQ5LC0zMjUuMjI3LC0yODEuODExQy0zNjYuNzQ4LC0yMTEuNzc0LC0zOTEuNzc4LC0xMzcuODgsLTQxMy44MDksLTU5LjQ5N0MtNDM5LjIxNywzMC45MDEsLTUwMS4xNjIsMTI1LjY2NywtNDYzLjk5NiwyMTEuOUMtNDI2Ljg1OSwyOTguMDY0LC0zMTIuNjM5LDMxMi45OTQsLTIzMi4zNDQsMzYxLjUzNEMtMTU0LjcwNCw0MDguNDY5LC05MC4xMjIsNDgxLjk2MSwwLDQ5Mi4zOTMiIGZpbGw9IiMyYTNjMzkiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTYwMCAxNjY4LjE0MUMxNzQ1LjAzMyAxNjYzLjcyNDAwMDAwMDAwMDIgMTg5OC4xODYgMTYyNi44MTYgMjAwMS44NDcgMTUyNS4yODYgMjA5OS45MzkgMTQyOS4yMSAyMTAyLjMzMSAxMjc3LjY2MSAyMTM0Ljg3IDExNDQuMjY3IDIxNjEuNDE4IDEwMzUuNDMzIDIxOTcuMTkxIDkyNy4xMDQgMjE3NC41MjIgODE3LjM5NiAyMTUyLjU4NSA3MTEuMjI4MDAwMDAwMDAwMSAyMDg0LjcwNyA2MjMuMzU2IDIwMTAuODQgNTQ0LjAwNSAxOTM5LjA4NSA0NjYuOTIzIDE4NTcuNDQ3OTk5OTk5OTk5OSAzOTcuMDA0IDE3NTYuMjA0IDM2OC4wMTkgMTY1NS4zMzMgMzM5LjE0MDk5OTk5OTk5OTk2IDE1NTEuNDQ5IDM2NC40MTMgMTQ0OC4xNzEgMzgyLjkxOCAxMzMyLjcwMSA0MDMuNjA3IDEyMTAuOTQ3MDAwMDAwMDAwMSA0MTAuNzY0IDExMTguMDIzMDAwMDAwMDAwMSA0ODIuMzY0IDEwMTUuMTEgNTYxLjY2MDAwMDAwMDAwMDEgOTQwLjYzNyA2NzQuOTM3IDkwNi40OTQgODAwLjI4OSA4NjkuNzc5IDkzNS4wODUgODcxLjQ0OSAxMDc5LjU3OCA5MTkuNjQxIDEyMTAuNzEgOTcwLjAwNyAxMzQ3Ljc1OCAxMDYwLjkzODk5OTk5OTk5OTkgMTQ2OC43ODQgMTE4Mi4xMDkgMTU1MC4yNTEgMTMwNC43MDMgMTYzMi42NzUgMTQ1Mi4zNDIgMTY3Mi42MzggMTYwMCAxNjY4LjE0MSIgZmlsbD0iIzNlNWE1NSI+PC9wYXRoPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPG1hc2sgaWQ9IlN2Z2pzTWFzazEwNTMiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI5MDAiIGZpbGw9IiNmZmZmZmYiPjwvcmVjdD4KICAgICAgICA8L21hc2s+CiAgICA8L2RlZnM+Cjwvc3ZnPg==')",
        shiny3:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjbGFzcz0idy1mdWxsIGgtZnVsbCBhYnNvbHV0ZSB6LTAiCiAgICB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyIgd2lkdGg9IjE2MDAiIGhlaWdodD0iOTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB2aWV3Qm94PSIwIDAgMTYwMCA5MDAiPgogICAgPGcgbWFzaz0idXJsKCZxdW90OyNTdmdqc01hc2sxMDU5JnF1b3Q7KSIgZmlsbD0ibm9uZSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE2MDAiIGhlaWdodD0iOTAwIiB4PSIwIiB5PSIwIiBmaWxsPSJyZ2JhKDYwLCAyOCwgMzUsIDEpIj48L3JlY3Q+CiAgICAgICAgPHBhdGggZD0iTTAsNDkyLjM5M0M5NC40MDQsNTAzLjMyLDE5Mi44MDUsNDc1LjUwNCwyNjkuNjg5LDQxOS42NDRDMzQ0LjY0NywzNjUuMTg0LDM3Mi4wNDIsMjcxLjUzLDQxNi4xNDMsMTkwLjA0NkM0NjMuNzk1LDEwMi4wMDEsNTYzLjQ4MSwxOS41NDgsNTM4LjczMiwtNzcuNDU4QzUxMy40ODMsLTE3Ni40MjUsMzc0Ljg3MiwtMTkwLjI2OSwzMDEuMDk0LC0yNjAuOUMyMzYuOTQ2LC0zMjIuMzEyLDIxMy45LC00MjAuNDc4LDEzNS45NjMsLTQ2My4wNDZDNDkuOTYyLC01MTAuMDE5LC01Ny41NDcsLTU0Mi40MzksLTE0OC43NTEsLTUwNi41OTlDLTIzOS4yNDUsLTQ3MS4wMzcsLTI3NS42NDMsLTM2NS40NDksLTMyNS4yMjcsLTI4MS44MTFDLTM2Ni43NDgsLTIxMS43NzQsLTM5MS43NzgsLTEzNy44OCwtNDEzLjgwOSwtNTkuNDk3Qy00MzkuMjE3LDMwLjkwMSwtNTAxLjE2MiwxMjUuNjY3LC00NjMuOTk2LDIxMS45Qy00MjYuODU5LDI5OC4wNjQsLTMxMi42MzksMzEyLjk5NCwtMjMyLjM0NCwzNjEuNTM0Qy0xNTQuNzA0LDQwOC40NjksLTkwLjEyMiw0ODEuOTYxLDAsNDkyLjM5MyIgZmlsbD0iIzMwMTYxYyI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xNjAwIDE2NjguMTQxQzE3NDUuMDMzIDE2NjMuNzI0MDAwMDAwMDAwMiAxODk4LjE4NiAxNjI2LjgxNiAyMDAxLjg0NyAxNTI1LjI4NiAyMDk5LjkzOSAxNDI5LjIxIDIxMDIuMzMxIDEyNzcuNjYxIDIxMzQuODcgMTE0NC4yNjcgMjE2MS40MTggMTAzNS40MzMgMjE5Ny4xOTEgOTI3LjEwNCAyMTc0LjUyMiA4MTcuMzk2IDIxNTIuNTg1IDcxMS4yMjgwMDAwMDAwMDAxIDIwODQuNzA3IDYyMy4zNTYgMjAxMC44NCA1NDQuMDA1IDE5MzkuMDg1IDQ2Ni45MjMgMTg1Ny40NDc5OTk5OTk5OTk5IDM5Ny4wMDQgMTc1Ni4yMDQgMzY4LjAxOSAxNjU1LjMzMyAzMzkuMTQwOTk5OTk5OTk5OTYgMTU1MS40NDkgMzY0LjQxMyAxNDQ4LjE3MSAzODIuOTE4IDEzMzIuNzAxIDQwMy42MDcgMTIxMC45NDcwMDAwMDAwMDAxIDQxMC43NjQgMTExOC4wMjMwMDAwMDAwMDAxIDQ4Mi4zNjQgMTAxNS4xMSA1NjEuNjYwMDAwMDAwMDAwMSA5NDAuNjM3IDY3NC45MzcgOTA2LjQ5NCA4MDAuMjg5IDg2OS43NzkgOTM1LjA4NSA4NzEuNDQ5IDEwNzkuNTc4IDkxOS42NDEgMTIxMC43MSA5NzAuMDA3IDEzNDcuNzU4IDEwNjAuOTM4OTk5OTk5OTk5OSAxNDY4Ljc4NCAxMTgyLjEwOSAxNTUwLjI1MSAxMzA0LjcwMyAxNjMyLjY3NSAxNDUyLjM0MiAxNjcyLjYzOCAxNjAwIDE2NjguMTQxIiBmaWxsPSIjNDgyMjJhIj48L3BhdGg+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bWFzayBpZD0iU3ZnanNNYXNrMTA1OSI+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0PgogICAgICAgIDwvbWFzaz4KICAgIDwvZGVmcz4KPC9zdmc+')",
        dark: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNCI+PC9yZWN0Pgo8L3N2Zz4=')",
        gradient:
          "linear-gradient(to bottom, rgb(38, 160, 218), rgb(49, 71, 85))",
        pattern:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMTY0RTYzIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNCI+PC9yZWN0Pgo8L3N2Zz4=')",
        pattern2:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjQTNBMUE3Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNCI+PC9yZWN0Pgo8L3N2Zz4=')",
        pattern3:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIgIzI4MkMzNSI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjQiPjwvcmVjdD4KPC9zdmc+')",
        pattern4:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMTU3QTZFIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMyYjJiMmIiPjwvcGF0aD4KPC9zdmc+')",
        pattern5:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMmIyYjJiIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2U9IiNDQTA1NEQiPjwvcGF0aD4KPC9zdmc+')",
        pattern6:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNTkzYjY5Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNCI+PC9yZWN0Pgo8L3N2Zz4=')",
      }),
    },
  },
  variants: {
    extend: {
      textColor: ["disabled"],
      width: ["hover"],
      backgroundImage: ["hover", "focus"],
    },
  },
  plugins: [],
}
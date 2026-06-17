# Deploying — all from the browser (no VS Code)

This project has two parts that deploy separately:

| Part | Folder | Where it runs | How |
|------|--------|---------------|-----|
| Backend API | `StudentAPI` | **Render** (runs Node) | `render.yaml` |
| Frontend (React) | `student-frontend` | **GitHub Pages** | GitHub Actions |

Do **Step 1 (backend) first** — you need its URL for the frontend.

---

## Step 1 — Deploy the backend API on Render

1. Go to **https://render.com** and sign up (you can log in with GitHub).
2. Click **New +** → **Blueprint**.
3. Choose the repo **`student-management-system`** and approve access.
4. Render detects `render.yaml` and shows a service called **student-api**.
   Click **Apply** / **Create**.
5. Wait for it to build. When done you get a public URL like:
   **`https://student-api.onrender.com`**
6. Test it: open `https://student-api.onrender.com/students` in your browser —
   you should see JSON.

> Notes on the free tier: the service **sleeps after ~15 min idle**, so the
> first request after a nap takes ~50s to wake. Also the SQLite database is
> **reset on each redeploy** (data isn't permanent). Both are fine for a demo;
> tell me if you want a permanent database and I'll switch it to a hosted DB.

It re-deploys automatically every time you push to `main`.

---

## Step 2 — Tell the frontend where the API is

1. On GitHub, open the repo → **Settings** → **Secrets and variables** →
   **Actions** → **Variables** tab → **New repository variable**.
2. Name: `REACT_APP_API_URL`
   Value: your Render URL from Step 1, e.g. `https://student-api.onrender.com`
3. Save.

---

## Step 3 — Turn on GitHub Pages

1. Repo → **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**.
3. That's it — no folder to pick.

---

## Step 4 — Deploy the frontend

The deploy runs automatically on every push to `main`. To run it now without
pushing anything:

1. Repo → **Actions** tab → **Deploy Frontend to GitHub Pages**.
2. Click **Run workflow** → **Run workflow**.
3. When it finishes (green check), your site is live at:
   **`https://harshildiyora-a11y.github.io/student-management-system/`**

Open that link — the React app loads and talks to your Render API. 🎉

---

## Day-to-day (no VS Code)

- Edit a file directly on **github.com** (pencil icon) → **Commit**.
- The backend auto-redeploys on Render; the frontend auto-redeploys via Actions.
- If you change the API URL, just update the `REACT_APP_API_URL` variable and
  re-run the frontend workflow.

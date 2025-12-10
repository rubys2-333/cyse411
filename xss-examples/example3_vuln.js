app.get('/search', (req, res) => {
  const q = escapeHtml(req.query.q || '');
  res.send(`<h1>Results for ${q}</h1>`);
});

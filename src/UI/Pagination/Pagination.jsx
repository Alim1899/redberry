import classes from "./Pagination.module.css";

// 1 2 [3] 4 ... 10
const getPages = (page, total) => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const visible = [1, page - 1, page, page + 1, total]
    .filter((p) => p >= 1 && p <= total)
    .filter((p, i, arr) => arr.indexOf(p) === i)
    .sort((a, b) => a - b);

  const result = [];
  visible.forEach((p, i) => {
    if (i > 0 && p - visible[i - 1] > 1) result.push("gap-" + p);
    result.push(p);
  });
  return result;
};

const Pagination = ({ page, totalPages, onChange }) => {
  if (!totalPages || totalPages <= 1) return null;

  return (
    <nav className={classes.pagination} aria-label="Pagination">
      <button
        type="button"
        className={classes.arrow}
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        aria-label="Previous page"
      >
        ‹
      </button>

      {getPages(page, totalPages).map((item) =>
        typeof item === "string" ? (
          <span key={item} className={classes.gap}>
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            className={`${classes.page} ${item === page ? classes.active : ""}`}
            onClick={() => onChange(item)}
            aria-current={item === page ? "page" : undefined}
          >
            {item}
          </button>
        ),
      )}

      <button
        type="button"
        className={classes.arrow}
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
        aria-label="Next page"
      >
        ›
      </button>

      <span className={classes.info}>
        Page {page} of {totalPages}
      </span>
    </nav>
  );
};

export default Pagination;
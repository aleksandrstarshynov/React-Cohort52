import { useState, useEffect, useCallback } from 'react';

export function useFetch(inputUrl, options) {
  const [urls, setUrls] = useState(
    Array.isArray(inputUrl) ? inputUrl : inputUrl ? [inputUrl] : []
  );
  const [data, setData] = useState(
    Array.isArray(inputUrl) ? [] : null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (urls.length === 0) {
      setData([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      if (urls.length > 1) {
        const results = await Promise.all(
          urls.map((url) =>
            fetch(url, options).then((r) => {
              if (!r.ok) throw new Error(r.statusText);
              return r.json();
            })
          )
        );
        setData(results);
      } else {
        const r = await fetch(urls[0], options);
        if (!r.ok) throw new Error(r.statusText);
        const json = await r.json();
        setData(json);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [urls, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback((newUrl) => {
    setUrls(
      Array.isArray(newUrl) ? newUrl : newUrl ? [newUrl] : []
    );
  }, []);

  return { data, loading, error, refetch };
}

export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message ?? "Something went wrong");
  }

  return json.data as T;
}

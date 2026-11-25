import { useEffect } from 'react'

export default function usePageTitle(pageName) {
  useEffect(() => {
    document.title = `Caleb Gilmore's Clever Gecko | ITIS3135 | ${pageName}`
  }, [pageName])
}
import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { Article } from '../types/article'
import styles from './Articles.module.scss'

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await api.get<Article[]>('/articles')
        setArticles(res.data)
      } catch (err) {
        setError('記事の取得に失敗しました。')
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (loading) return <p>読み込み中...</p>
  if (error) return <p>{error}</p>

  return (
    <main className={styles.articleList}>
      <h2>記事一覧</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articles.map((article) => (
          <li key={article.id} className={styles.articleItem}>
            <h3>{article.title}</h3>
            <div className="category">カテゴリ: {article.category}</div>
            <div className="summary">{article.summary}</div>
            <div className="date">公開日: {article.publishedAt}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Articles

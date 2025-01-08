'use client';
import React from 'react'
import '@/styles/globals.scss';
import Table from '@/components/Table/Table';
import { useSearch } from '@/contexts/SearchContext';

export default function LeagueTable() {
  const { openSearch } = useSearch();

  if (openSearch) return null;

  return (
    <div>
      <Table />
    </div>
  )
}

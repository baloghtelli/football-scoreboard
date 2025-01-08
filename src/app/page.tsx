'use client';
import '../styles/globals.scss';
import ScoreCard from '@/components/ScoreCard/ScoreCard';
import LeagueCard from '@/components/LeagueCard/LeagueCard';
import { useSearch } from '@/contexts/SearchContext'

export default function Home() {
  const { openSearch } = useSearch();

  if (openSearch) return null;
  
  return (
    <div>
      <LeagueCard />
      <ScoreCard />
      <ScoreCard />
      <ScoreCard />
      <ScoreCard />
    </div>
  );
}

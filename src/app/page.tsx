'use client';
import '../styles/globals.scss';
import ScoreCard from '@/components/ScoreCard/ScoreCard';
import LeagueCard from '@/components/LeagueCard/LeagueCard';

interface HomeProps {
  openSearch?: boolean;
}

export default function Home({openSearch}: HomeProps) {
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

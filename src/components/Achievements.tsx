import { Trophy, Target, Star, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Competitive Programming Excellence",
      description: "Strong performance across multiple coding platforms",
      details: [
        "Codeforces Rating: 1164",
        "LeetCode: 850+ problems solved (Rating: 1790)",
        "GeeksforGeeks: 170+ problems solved"
      ],
      links: [
        { name: "Codeforces", url: "https://codeforces.com/profile/harshrajnita22" },
        { name: "LeetCode", url: "https://leetcode.com/u/Harshthakur1079/" },
        { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/harshrajxlet/" }
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Global Programming Contests",
      description: "Outstanding performance in international competitions",
      details: [
        "Meta Hacker Cup 2024: Global Ranks 2652 & 3702 (Rounds 1 & 2)",
        "Google Code Jam 2023: Rank 5622"
      ],
      links: []
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Top percentile performance in national entrance exam",
      details: [
        "JEE Main 2022: Top 2 percentile among 1.4 million candidates",
        "Current CGPA: 8.37 at NIT Agartala"
      ],
      links: []
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Leadership & Community",
      description: "Active involvement in college activities and mentorship",
      details: [
        "Core Member - NITA MUNSOC",
        "Mentored 30+ juniors in debating",
        "Represented NIT Agartala at IIT Kharagpur and IIT Guwahati"
      ],
      links: []
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Achievements
          </h2>
          <p className="text-xl text-muted-foreground">
            Recognitions and milestones along the journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card card-hover">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    {achievement.icon}
                  </div>
                  {achievement.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {achievement.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {achievement.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
                
                {achievement.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {achievement.links.map((link, i) => (
                      <Badge key={i} variant="outline" className="hover:bg-primary/20 transition-colors">
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs"
                        >
                          {link.name}
                        </a>
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
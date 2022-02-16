import React from "react";

interface Properties {
  score: number;
}

const ScoreBoard: React.FC<Properties> = ({ score }) => (
  <div className="w-full mt-0 stats rounded-none glass fixed bottom-0">
    <div className="stat glass" data-testid="score-container">
      <div
        className="stat-value text-center text-green-900"
        data-testid="score-value"
      >
        {score}
      </div>
      <div className="stat-desc" data-testid="score-bar">
        {score <= 10 && (
          <progress
            value={score}
            max="10"
            className="progress progress-accent"
          />
        )}
        {score > 10 && score <= 20 && (
          <progress
            value={score - 10}
            max="10"
            className="progress progress-success"
          />
        )}
        {score > 20 && score <= 30 && (
          <progress
            value={score - 20}
            max="10"
            className="progress progress-info"
          />
        )}
        {score > 30 && score <= 40 && (
          <progress
            value={score - 30}
            max="10"
            className="progress progress-primary"
          />
        )}
        {score > 40 && score <= 50 && (
          <progress
            value={score - 40}
            max="10"
            className="progress progress-warning"
          />
        )}
        {score > 50 && score <= 60 && (
          <progress
            value={score - 50}
            max="10"
            className="progress progress-error"
          />
        )}
        {score > 60 && (
          <progress
            value={score}
            max="300"
            className="progress progress-secondary"
          />
        )}
      </div>
    </div>
  </div>
);

export default ScoreBoard;

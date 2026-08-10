import styles from './StudentCard.module.css';

function StudentCard({ student }) {

  const isOnProbation = student.status === 'On Probation';
  
  const isDeansLister = student.gwa <= 1.75;

  const statusText = isOnProbation ? 'On Probation' : student.status;

  return (
    <div className={`${styles.card} ${isOnProbation ? styles.probation : ''}`}>
      <h3 className={styles.name}>{student.name}</h3>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year Level:</strong> {student.yearLevel}</p>
      <p><strong>Status:</strong> {statusText}</p>
      <p><strong>GWA:</strong> {student.gwa.toFixed(2)}</p>
      {isDeansLister && <span className={styles.badge}>Dean's Lister</span>}
    </div>
  );
}

export default StudentCard;
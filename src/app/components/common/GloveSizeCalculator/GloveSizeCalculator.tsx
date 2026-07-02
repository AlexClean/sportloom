"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./GloveSizeCalculator.module.css";

type TrainingType = "bag" | "sparring" | "fitness" | "allround";

export function GloveSizeCalculator() {
  const [weight, setWeight] = useState("");
  const [handCircumference, setHandCircumference] = useState("");
  const [trainingType, setTrainingType] = useState<TrainingType>("allround");

  const result = useMemo(() => {
    const weightKg = Number(weight);
    const handCm = Number(handCircumference);

    if (!weightKg || !handCm) return null;

    let size = "14 oz";
    let reason = "This is a safe all-around size for general boxing training.";

    if (trainingType === "sparring") {
      size = "16 oz";
      reason = "Sparring usually requires more padding to protect both you and your partner.";
    } else if (weightKg < 55) {
      size = trainingType === "bag" ? "10–12 oz" : "12 oz";
      reason = "Your body weight suggests a lighter glove may feel more natural.";
    } else if (weightKg >= 55 && weightKg < 75) {
      size = trainingType === "bag" ? "12 oz" : "14 oz";
      reason = "Your weight range fits well with 12–14 oz gloves depending on training style.";
    } else if (weightKg >= 75 && weightKg < 90) {
      size = trainingType === "bag" ? "14 oz" : "14–16 oz";
      reason = "Your weight range usually works best with medium to heavier training gloves.";
    } else {
      size = "16 oz";
      reason = "Heavier athletes usually benefit from extra padding and wrist support.";
    }

    const wideHandNote =
      handCm >= 23
        ? "Your hand circumference suggests you may prefer roomier gloves or models known for wide hands."
        : "Your hand circumference does not suggest an unusually wide fit requirement.";

    return {
      size,
      reason,
      wideHandNote,
    };
  }, [weight, handCircumference, trainingType]);

  return (
    <section className={styles.calculatorSection} aria-labelledby="calculator-title">
      <div className={styles.calculatorCard}>
        <div className={styles.calculatorIntro}>
          <p className={styles.eyebrow}>Free Calculator</p>
          <h2 id="calculator-title">Find your boxing glove size</h2>
          <p>
            Enter your body weight, hand circumference, and main training goal. The result is a practical recommendation,
            not a medical or competition rule.
          </p>
        </div>

        <div className={styles.formGrid}>
          <label className={styles.field}>
            <span>Body weight, kg</span>
            <input
              type="number"
              min="30"
              max="160"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Example: 78"
            />
          </label>

          <label className={styles.field}>
            <span>Hand circumference, cm</span>
            <input
              type="number"
              min="14"
              max="32"
              value={handCircumference}
              onChange={(e) => setHandCircumference(e.target.value)}
              placeholder="Example: 22"
            />
          </label>

          <label className={styles.field}>
            <span>Main training type</span>
            <select value={trainingType} onChange={(e) => setTrainingType(e.target.value as TrainingType)}>
              <option value="allround">General training</option>
              <option value="bag">Heavy bag / pads</option>
              <option value="sparring">Sparring</option>
              <option value="fitness">Fitness boxing</option>
            </select>
          </label>
        </div>

        <div className={styles.resultBox}>
          {result ? (
            <>
              <p className={styles.resultLabel}>Recommended size</p>
              <strong>{result.size}</strong>
              <p>{result.reason}</p>
              <p>{result.wideHandNote}</p>

              <div className={styles.resultLinks}>
                <Link href="/boxing/gloves/best-boxing-gloves-for-beginners">Beginner glove picks</Link>
                <Link href="/boxing/gloves/best-boxing-gloves-for-wide-hands">Wide hand glove picks</Link>
              </div>
            </>
          ) : (
            <p>Enter your weight and hand circumference to see your recommended glove size.</p>
          )}
        </div>
      </div>
    </section>
  );
}
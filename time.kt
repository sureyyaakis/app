import android.graphics.Color
import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import java.text.SimpleDateFormat
import java.util.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Get a reference to the TextView
        val timeTextView = findViewById<TextView>(R.id.time_text_view)

        // Set the background color and font color of the TextView
        timeTextView.setBackgroundColor(Color.BLACK)
        timeTextView.setTextColor(Color.WHITE)

        // Get the current time
        val calendar = Calendar.getInstance()
        val currentTime = calendar.time

        // Create a SimpleDateFormat object to format the time
        val dateFormat = SimpleDateFormat("h:mm a")

        // Set the timeTextView text to the formatted current time
        timeTextView.text = dateFormat.format(currentTime)
    }
}

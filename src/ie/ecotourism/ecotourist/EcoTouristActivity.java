package ie.ecotourism.ecotourist;

import org.apache.cordova.DroidGap;
import android.os.Bundle;

public class EcoTouristActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.loadUrl("file:///android_asset/www/index.html",10000);// display for 10 seconds, will auto hide when device is ready
    }
}
